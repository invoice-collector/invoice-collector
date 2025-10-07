
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ToopostExtranetCollector extends SketchCollector {

    static CONFIG = {
        id: "toopost_extranet",
        name: "toopost Extranet",
        description: "i18n.collectors.toopost_extranet.description",
        version: "0",
        website: "https://extranet.toopost.net/index.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4494826.jpg",
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
        entryUrl: "https://extranet.toopost.net/index.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ToopostExtranetCollector.CONFIG);
    }
}
