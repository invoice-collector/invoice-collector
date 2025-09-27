
import { SketchCollector } from '../../sketchCollector';

export class QuixelEpicGamesCollector extends SketchCollector {

    static CONFIG = {
        id: "quixel_epic_games",
        name: "Quixel - Epic Games",
        description: "i18n.collectors.quixel_epic_games.description",
        version: "0",
        website: "https://quixel.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1315286.jpg",
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
        entryUrl: "https://quixel.com/account",
    }

    constructor() {
        super(QuixelEpicGamesCollector.CONFIG);
    }
}
