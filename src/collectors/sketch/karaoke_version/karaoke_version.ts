
import { SketchCollector } from '../../sketchCollector';

export class KaraokeVersionCollector extends SketchCollector {

    static CONFIG = {
        id: "karaoke_version",
        name: "Karaoke Version",
        description: "i18n.collectors.karaoke_version.description",
        version: "0",
        website: "https://www.karaoke-version.de/my/orders.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/89368.jpg",
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
        entryUrl: "https://www.karaoke-version.de/my/orders.html",
    }

    constructor() {
        super(KaraokeVersionCollector.CONFIG);
    }
}
