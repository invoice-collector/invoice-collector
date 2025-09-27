
import { SketchCollector } from '../../sketchCollector';

export class MusicmeCollector extends SketchCollector {

    static CONFIG = {
        id: "musicme",
        name: "MusicMe",
        description: "i18n.collectors.musicme.description",
        version: "0",
        website: "https://www.musicme.com/#/mon-musicme/connexion/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122256.jpg",
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
        entryUrl: "https://www.musicme.com/#/mon-musicme/connexion/",
    }

    constructor() {
        super(MusicmeCollector.CONFIG);
    }
}
