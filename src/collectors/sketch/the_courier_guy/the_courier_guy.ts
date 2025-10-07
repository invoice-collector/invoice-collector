
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TheCourierGuyCollector extends SketchCollector {

    static CONFIG = {
        id: "the_courier_guy",
        name: "The Courier Guy",
        description: "i18n.collectors.the_courier_guy.description",
        version: "0",
        website: "https://tcgweb16931.pperfect.com/pponline/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/741141.jpg",
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
        entryUrl: "https://tcgweb16931.pperfect.com/pponline/login.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TheCourierGuyCollector.CONFIG);
    }
}
