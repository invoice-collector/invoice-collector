
import { SketchCollector } from '../../sketchCollector';

export class OpenDriveCollector extends SketchCollector {

    static CONFIG = {
        id: "open_drive",
        name: "Open Drive",
        description: "i18n.collectors.open_drive.description",
        version: "0",
        website: "https://www.opendrive.com/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/223737.jpg",
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
        entryUrl: "https://www.opendrive.com/billing/invoices",
    }

    constructor() {
        super(OpenDriveCollector.CONFIG);
    }
}
