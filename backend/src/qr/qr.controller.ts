import {
  Controller,
  Post,
  Get,
  Body,
  Res,
  HttpCode,
  HttpStatus,
  Header,
} from '@nestjs/common';
import type { Response } from 'express';
import { QrService } from './qr.service';
import { GenerateQrDto } from './dto/generate-qr.dto';

@Controller('qr')
export class QrController {
  constructor(private readonly qrService: QrService) {}

  /**
   * POST /qr/png
   * Body: GenerateQrDto
   * Response: image/png binary
   */
  @Post('png')
  @HttpCode(HttpStatus.OK)
  @Header('Content-Type', 'image/png')
  @Header('Cache-Control', 'no-store')
  async generatePng(
    @Body() dto: GenerateQrDto,
    @Res({ passthrough: false }) res: Response,
  ): Promise<void> {
    const buffer = await this.qrService.toPngBuffer(dto);
    res.setHeader('Content-Length', buffer.length);
    res.send(buffer);
  }

  /**
   * POST /qr/data-url
   * Body: GenerateQrDto
   * Response: { dataUrl, mimeType }
   */
  @Post('data-url')
  @HttpCode(HttpStatus.OK)
  async generateDataUrl(@Body() dto: GenerateQrDto) {
    return this.qrService.toDataUrl(dto);
  }

  /**
   * GET /qr/health – simple readiness check
   */
  @Get('health')
  health() {
    return { status: 'ok', module: 'qr' };
  }
}
