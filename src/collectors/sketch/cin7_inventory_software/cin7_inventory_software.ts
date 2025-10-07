
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Cin7InventorySoftwareCollector extends SketchCollector {

    static CONFIG = {
        id: "cin7_inventory_software",
        name: "Cin7 Inventory Software",
        description: "i18n.collectors.cin7_inventory_software.description",
        version: "0",
        website: "https://auth.cin7.com/account/login?returnUrl=%2Fconnect%2Fauthorize%2Flogin%3Fclient_id%3DCloudImplicit%26response_mode%3Dform_post%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%2520email%2520cin7Roles%26state%3DOpenIdConnect.Authenti",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8280.jpg",
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
        entryUrl: "https://auth.cin7.com/account/login?returnUrl=%2Fconnect%2Fauthorize%2Flogin%3Fclient_id%3DCloudImplicit%26response_mode%3Dform_post%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%2520email%2520cin7Roles%26state%3DOpenIdConnect.Authenti",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Cin7InventorySoftwareCollector.CONFIG);
    }
}
