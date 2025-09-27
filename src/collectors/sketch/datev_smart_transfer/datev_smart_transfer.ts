
import { SketchCollector } from '../../sketchCollector';

export class DatevSmartTransferCollector extends SketchCollector {

    static CONFIG = {
        id: "datev_smart_transfer",
        name: "DATEV Smart Transfer",
        description: "i18n.collectors.datev_smart_transfer.description",
        version: "0",
        website: "https://smarttransfer.datev.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/230804.jpg",
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
        entryUrl: "https://smarttransfer.datev.de/",
    }

    constructor() {
        super(DatevSmartTransferCollector.CONFIG);
    }
}
