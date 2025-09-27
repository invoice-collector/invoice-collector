
import { SketchCollector } from '../../sketchCollector';

export class CodeschoolCollector extends SketchCollector {

    static CONFIG = {
        id: "codeschool",
        name: "CodeSchool",
        description: "i18n.collectors.codeschool.description",
        version: "0",
        website: "https://www.codeschool.com/users/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/52189.jpg",
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
        entryUrl: "https://www.codeschool.com/users/sign_in",
    }

    constructor() {
        super(CodeschoolCollector.CONFIG);
    }
}
