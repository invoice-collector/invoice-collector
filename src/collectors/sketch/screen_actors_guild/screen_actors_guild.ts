
import { SketchCollector } from '../../sketchCollector';

export class ScreenActorsGuildCollector extends SketchCollector {

    static CONFIG = {
        id: "screen_actors_guild",
        name: "Screen Actors Guild",
        description: "i18n.collectors.screen_actors_guild.description",
        version: "0",
        website: "https://www.sagaftra.org/welcome",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8667.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://www.sagaftra.org/welcome",
    }

    constructor() {
        super(ScreenActorsGuildCollector.CONFIG);
    }
}
