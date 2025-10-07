
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ComunifiedInteractiveDigitalMediaGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "comunified_interactive_digital_media_gmbh",
        name: "Comunified - interactive digital media GmbH",
        description: "i18n.collectors.comunified_interactive_digital_media_gmbh.description",
        version: "0",
        website: "https://www.comunified.com/service/invoice.php?menu=8",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1723359.jpg",
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
        entryUrl: "https://www.comunified.com/service/invoice.php?menu=8",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ComunifiedInteractiveDigitalMediaGmbhCollector.CONFIG);
    }
}
