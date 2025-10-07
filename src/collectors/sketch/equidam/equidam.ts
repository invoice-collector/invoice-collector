
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EquidamCollector extends SketchCollector {

    static CONFIG = {
        id: "equidam",
        name: "Equidam",
        description: "i18n.collectors.equidam.description",
        version: "0",
        website: "https://secure.equidam.com/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/75645.jpg",
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
        entryUrl: "https://secure.equidam.com/login.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EquidamCollector.CONFIG);
    }
}
