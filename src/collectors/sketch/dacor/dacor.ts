
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DacorCollector extends SketchCollector {

    static CONFIG = {
        id: "dacor",
        name: "DACOR",
        description: "i18n.collectors.dacor.description",
        version: "0",
        website: "https://dacor.de/kundenportal/konto.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/804775.jpg",
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
        entryUrl: "https://dacor.de/kundenportal/konto.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DacorCollector.CONFIG);
    }
}
