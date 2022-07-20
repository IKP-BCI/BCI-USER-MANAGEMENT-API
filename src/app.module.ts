import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { UserInformationModule } from './user-information/user-information.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [UserModule, UserInformationModule,
    ConfigModule.forRoot(),
    // ConfigModule.forRoot({
    //   envFilePath: [''],
    // }),

    // MongooseModule.forRoot(`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_INITDB_HOST}:${process.env.MONGO_INITDB_PORT}/${process.env.MONGO_INITDB_DATABASE}`)
    // MongooseModule.forRoot(`mongodb://bci_user:Passw0rd@157.245.148.217:27007/bci_db`),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.BCI_DB_URI,
      }),
    })
    // MongooseModule.forRoot(BCI_DB_URI),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
