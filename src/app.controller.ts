import { Controller, Get, Post, Request, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth/register')
  async register(@Request() req) {
    return this.authService.register(req.body);
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Res({ passthrough: true }) response) {
    const access_token = await this.authService.login(req.user);
    response.cookie('access_token', access_token);
    return {
      statusCode: 200,
      message: 'Authorized',
      access_token,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('checkUser')
  getProfile(@Request() req) {
    return req.user;
  }
}
