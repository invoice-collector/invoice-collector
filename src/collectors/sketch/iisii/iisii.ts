
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IisiiCollector extends SketchCollector {

    static CONFIG = {
        id: "iisii",
        name: "iisii",
        description: "i18n.collectors.iisii.description",
        version: "0",
        website: "https://www.online-tis.de/px_rechnungen.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/223730.jpg",
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
        entryUrl: "https://www.online-tis.de/px_rechnungen.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IisiiCollector.CONFIG);
    }
}
