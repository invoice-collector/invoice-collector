
import { SketchCollector } from '../../sketchCollector';

export class YesparkCollector extends SketchCollector {

    static CONFIG = {
        id: "yespark",
        name: "yespark",
        description: "i18n.collectors.yespark.description",
        version: "0",
        website: "https://www.yespark.fr/users/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/875955.jpg",
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
        entryUrl: "https://www.yespark.fr/users/sign_in",
    }

    constructor() {
        super(YesparkCollector.CONFIG);
    }
}
