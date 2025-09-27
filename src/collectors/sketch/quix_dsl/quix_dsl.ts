
import { SketchCollector } from '../../sketchCollector';

export class QuixDslCollector extends SketchCollector {

    static CONFIG = {
        id: "quix_dsl",
        name: "QUiX DSL",
        description: "i18n.collectors.quix_dsl.description",
        version: "0",
        website: "https://kundenportal.myquix.de/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9249.jpg",
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
        entryUrl: "https://kundenportal.myquix.de/#/login",
    }

    constructor() {
        super(QuixDslCollector.CONFIG);
    }
}
