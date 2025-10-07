
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MyCompanyFilesCollector extends SketchCollector {

    static CONFIG = {
        id: "my_company_files",
        name: "My company files",
        description: "i18n.collectors.my_company_files.description",
        version: "0",
        website: "https://customer.mycompanyfiles.fr/auth/login?ReturnUrl=%2f",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/137016.jpg",
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
        entryUrl: "https://customer.mycompanyfiles.fr/auth/login?ReturnUrl=%2f",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MyCompanyFilesCollector.CONFIG);
    }
}
