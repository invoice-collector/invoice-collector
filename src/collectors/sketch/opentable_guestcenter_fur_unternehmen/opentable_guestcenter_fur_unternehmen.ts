
import { SketchCollector } from '../../sketchCollector';

export class OpentableGuestcenterFurUnternehmenCollector extends SketchCollector {

    static CONFIG = {
        id: "opentable_guestcenter_fur_unternehmen",
        name: "Opentable Guestcenter  fur Unternehmen",
        description: "i18n.collectors.opentable_guestcenter_fur_unternehmen.description",
        version: "0",
        website: "https://guestcenter.opentable.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4085663.jpg",
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
        entryUrl: "https://guestcenter.opentable.com/login",
    }

    constructor() {
        super(OpentableGuestcenterFurUnternehmenCollector.CONFIG);
    }
}
