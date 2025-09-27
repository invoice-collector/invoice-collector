
import { SketchCollector } from '../../sketchCollector';

export class CodeanywhereCollector extends SketchCollector {

    static CONFIG = {
        id: "codeanywhere",
        name: "Codeanywhere",
        description: "i18n.collectors.codeanywhere.description",
        version: "0",
        website: "http://www.codeanywhere.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/52300.jpg",
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
        entryUrl: "http://www.codeanywhere.com",
    }

    constructor() {
        super(CodeanywhereCollector.CONFIG);
    }
}
