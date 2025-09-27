
import { SketchCollector } from '../../sketchCollector';

export class MedialogCollector extends SketchCollector {

    static CONFIG = {
        id: "medialog",
        name: "Medialog",
        description: "i18n.collectors.medialog.description",
        version: "0",
        website: "https://clients.medialog.fr/Compte",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4216941.jpg",
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
        entryUrl: "https://clients.medialog.fr/Compte",
    }

    constructor() {
        super(MedialogCollector.CONFIG);
    }
}
