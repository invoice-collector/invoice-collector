
import { SketchCollector } from '../../sketchCollector';

export class PcaCollector extends SketchCollector {

    static CONFIG = {
        id: "pca",
        name: "PCA",
        description: "i18n.collectors.pca.description",
        version: "0",
        website: "https://reporting.pca.de/web-main/app/reporting/invoices?execution=e5s7",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/236256.jpg",
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
        entryUrl: "https://reporting.pca.de/web-main/app/reporting/invoices?execution=e5s7",
    }

    constructor() {
        super(PcaCollector.CONFIG);
    }
}
