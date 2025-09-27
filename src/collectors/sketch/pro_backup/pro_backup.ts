
import { SketchCollector } from '../../sketchCollector';

export class ProBackupCollector extends SketchCollector {

    static CONFIG = {
        id: "pro_backup",
        name: "Pro Backup",
        description: "i18n.collectors.pro_backup.description",
        version: "0",
        website: "https://app.probackup.io/p/asana/dashboard/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1475976.jpg",
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
        entryUrl: "https://app.probackup.io/p/asana/dashboard/account/invoices",
    }

    constructor() {
        super(ProBackupCollector.CONFIG);
    }
}
