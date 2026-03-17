import {
  IsString,
  IsNotEmpty,
  IsInt,
  Min,
  Max,
  IsOptional,
  Matches,
  MaxLength,
} from 'class-validator';

const HEX_COLOR = /^#([0-9A-Fa-f]{6})$/;

export class GenerateQrDto {
  /** Payload to encode (URL, plain text, or WIFI:... string) */
  @IsString()
  @IsNotEmpty({ message: 'text must not be empty' })
  @MaxLength(2953, {
    message: 'payload too long for QR version capacity',
  })
  text: string;

  /** Canvas width in pixels */
  @IsOptional()
  @IsInt()
  @Min(64)
  @Max(2048)
  width?: number;

  /** Margin in modules (quiet zone) */
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(10)
  margin?: number;

  /** Foreground color */
  @IsOptional()
  @Matches(HEX_COLOR, { message: 'dark must be a hex color like #000000' })
  dark?: string;

  /** Background color */
  @IsOptional()
  @Matches(HEX_COLOR, { message: 'light must be a hex color like #ffffff' })
  light?: string;

  /** Error correction: L, M, Q, H */
  @IsOptional()
  @Matches(/^[LMQH]$/)
  errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
}
