// import {
//   WebSocketGateway,
//   OnGatewayConnection,
//   OnGatewayDisconnect,
//   WebSocketServer,
//   SubscribeMessage,
// } from '@nestjs/websockets';
// import { Server, Socket } from 'socket.io';
// import { Pixel } from 'src/pixels/entities/pixel.entity';

// @WebSocketGateway()
// export class SessionsGateway
//   implements OnGatewayConnection, OnGatewayDisconnect
// {
//   @WebSocketServer()
//   server: Server;

//   private connectedClients: Socket[] = [];

//   handleConnection(client: Socket) {
//     this.connectedClients.push(client);
//   }

//   handleDisconnect(client: Socket) {
//     this.connectedClients = this.connectedClients.filter((c) => c !== client);
//   }

//   notifyPixelChanges(sessionId: number, pixels: Pixel[]) {
//     this.server.to(`session-${sessionId}`).emit('pixelChanges', pixels);
//   }

//   @SubscribeMessage('subscribeToSession')
//   handleSubscribeToSession(client: Socket, sessionId: number) {
//     client.join(`session-${sessionId}`);
//   }

//   @SubscribeMessage('unsubscribeFromSession')
//   handleUnsubscribeFromSession(client: Socket, sessionId: number) {
//     client.leave(`session-${sessionId}`);
//   }
// }
