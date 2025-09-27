
import { SketchCollector } from '../../sketchCollector';

export class ConbrIoFilesharingCollector extends SketchCollector {

    static CONFIG = {
        id: "conbr_io_filesharing",
        name: "Conbr.io Filesharing",
        description: "i18n.collectors.conbr_io_filesharing.description",
        version: "0",
        website: "https://conbr.io/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/210953.jpg",
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
        entryUrl: "https://conbr.io/account/billing",
    }

    constructor() {
        super(ConbrIoFilesharingCollector.CONFIG);
    }
}
