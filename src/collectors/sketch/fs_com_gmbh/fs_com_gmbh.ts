
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FsComGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "fs_com_gmbh",
        name: "FS.COM GmbH",
        description: "i18n.collectors.fs_com_gmbh.description",
        version: "0",
        website: "https://www.fs.com/de/order_invoice?id=1406983&type=2&orderType=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1416081.jpg",
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
        entryUrl: "https://www.fs.com/de/order_invoice?id=1406983&type=2&orderType=1",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FsComGmbhCollector.CONFIG);
    }
}
