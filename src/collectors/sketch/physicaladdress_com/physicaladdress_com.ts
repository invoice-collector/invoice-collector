
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PhysicaladdressComCollector extends SketchCollector {

    static CONFIG = {
        id: "physicaladdress_com",
        name: "PhysicalAddress.com",
        description: "i18n.collectors.physicaladdress_com.description",
        version: "0",
        website: "https://physicaladdress.com/virtualizedmail/customerLogin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/857981.jpg",
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
        entryUrl: "https://physicaladdress.com/virtualizedmail/customerLogin",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PhysicaladdressComCollector.CONFIG);
    }
}
