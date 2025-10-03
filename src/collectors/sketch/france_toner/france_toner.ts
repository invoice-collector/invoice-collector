
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FranceTonerCollector extends SketchCollector {

    static CONFIG = {
        id: "france_toner",
        name: "France Toner",
        description: "i18n.collectors.france_toner.description",
        version: "0",
        website: "https://www.francetoner.fr/caddy.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118624.jpg",
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
        entryUrl: "https://www.francetoner.fr/caddy.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FranceTonerCollector.CONFIG);
    }
}
