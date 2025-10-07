
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KubiiCollector extends SketchCollector {

    static CONFIG = {
        id: "kubii",
        name: "Kubii",
        description: "i18n.collectors.kubii.description",
        version: "0",
        website: "https://www.kubii.fr/index.php?controller=authentication?back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120406.jpg",
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
        entryUrl: "https://www.kubii.fr/index.php?controller=authentication?back=my-account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KubiiCollector.CONFIG);
    }
}
