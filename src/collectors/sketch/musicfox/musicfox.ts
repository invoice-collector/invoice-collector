
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MusicfoxCollector extends SketchCollector {

    static CONFIG = {
        id: "musicfox",
        name: "Musicfox",
        description: "i18n.collectors.musicfox.description",
        version: "0",
        website: "https://www.musicfox.com/kunde/rechnungen.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/388013.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.musicfox.com/kunde/rechnungen.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MusicfoxCollector.CONFIG);
    }
}
