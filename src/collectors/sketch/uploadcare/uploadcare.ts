
import { SketchCollector } from '../../sketchCollector';

export class UploadcareCollector extends SketchCollector {

    static CONFIG = {
        id: "uploadcare",
        name: "uploadcare",
        description: "i18n.collectors.uploadcare.description",
        version: "0",
        website: "https://uploadcare.com/accounts/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20948.jpg",
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
        entryUrl: "https://uploadcare.com/accounts/invoices/",
    }

    constructor() {
        super(UploadcareCollector.CONFIG);
    }
}
