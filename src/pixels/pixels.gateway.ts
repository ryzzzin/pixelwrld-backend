import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Pixel } from './entities/pixel.entity';

@WebSocketGateway()
export class PixelsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('subscribeToSessionPixels')
  handleSubscribeToSessionPixels(
    @MessageBody() sessionId: any,
    @ConnectedSocket() client: Socket,
  ) {
    console.log(sessionId);

    const sessionRoom = `session-pixels-${sessionId.sessionId}`;
    client.join(sessionRoom);
    const room = this.server.sockets.adapter.rooms.get(sessionRoom);
    if (room && room.size > 0) {
      console.log(`Клиенты в комнате ${sessionRoom}:`, [...room]);
    } else {
      console.log(`Нет клиентов в комнате ${sessionRoom}`);
    }
  }

  @SubscribeMessage('unsubscribeFromSessionPixels')
  handleUnsubscribeFromSessionPixels(
    @MessageBody() sessionId: number,
    @ConnectedSocket() client: Socket,
  ) {
    const sessionRoom = `session-pixels-${sessionId}`;
    client.leave(sessionRoom);
  }

  notifyPixelChanges(pixel: Pixel) {
    const sessionRoom = `session-pixels-${pixel.session.id}`;
    const room = this.server.sockets.adapter.rooms.get(sessionRoom);
    if (room && room.size > 0) {
      this.server.to(sessionRoom).emit('pixelChanged', pixel);
      console.log(`Уведомление отправлено в комнату ${sessionRoom}`);
    } else {
      console.log(`Нет клиентов в комнате ${sessionRoom}`);
    }
  }
}
