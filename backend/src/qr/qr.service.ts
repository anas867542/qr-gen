import { Injectable, BadRequestException } from '@nestjs/common';
import * as QRCode from 'qrcode';
import type { QRCodeToBufferOptions } from 'qrcode';
import { GenerateQrDto } from './dto/generate-qr.dto';

@Injectable()
export class QrService {
  /**
   * Generates a PNG buffer from payload. Uses same options shape as node-qrcode.
   */
  async toPngBuffer(dto: GenerateQrDto): Promise<Buffer> {
    const text = dto.text?.trim();
    if (!text) {
      throw new BadRequestException('text must not be empty');
    }

    const options: QRCodeToBufferOptions = {
      type: 'png',
      width: dto.width ?? 256,
      margin: dto.margin ?? 2,
      color: {
        dark: dto.dark ?? '#000000',
        light: dto.light ?? '#ffffff',
      },
      errorCorrectionLevel: dto.errorCorrectionLevel ?? 'M',
    };

    try {
      return await QRCode.toBuffer(text, options);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'QR generation failed';
      throw new BadRequestException(message);
    }
  }

  /**
   * Returns data URL (base64 PNG) for clients that prefer JSON.
   */
  async toDataUrl(dto: GenerateQrDto): Promise<{ dataUrl: string; mimeType: string }> {
    const text = dto.text?.trim();
    if (!text) {
      throw new BadRequestException('text must not be empty');
    }

    const options = {
      width: dto.width ?? 256,
      margin: dto.margin ?? 2,
      color: {
        dark: dto.dark ?? '#000000',
        light: dto.light ?? '#ffffff',
      },
      errorCorrectionLevel: dto.errorCorrectionLevel ?? 'M',
    };

    try {
      const dataUrl = await QRCode.toDataURL(text, options);
      return { dataUrl, mimeType: 'image/png' };
    } catch (err) {
      const message = err instanceof Error ? err.message : 'QR generation failed';
      throw new BadRequestException(message);
    }
  }
}
