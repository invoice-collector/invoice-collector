
import { SketchCollector } from '../../sketchCollector';

export class DataplugsComCollector extends SketchCollector {

    static CONFIG = {
        id: "dataplugs_com",
        name: "Dataplugs.com",
        description: "i18n.collectors.dataplugs_com.description",
        version: "0",
        website: "https://client.dataplugs.com/clientarea.php?action=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1436475.jpg",
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
        entryUrl: "https://client.dataplugs.com/clientarea.php?action=invoices",
    }

    constructor() {
        super(DataplugsComCollector.CONFIG);
    }
}
