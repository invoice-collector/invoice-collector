
import { SketchCollector } from '../../sketchCollector';

export class EcoembesCollector extends SketchCollector {

    static CONFIG = {
        id: "ecoembes",
        name: "ecoembes",
        description: "i18n.collectors.ecoembes.description",
        version: "0",
        website: "https://fspro.ecoembes.com/adfs/ls?version=1.0&action=signin&realm=urn%3AAppProxy%3Acom&appRealm=ab03468a-2bfe-e811-8114-005056b119d5&returnUrl=https%3A%2F%2Fsso.ecoembes.com%2FEcoembes.SGC.ServiciosPortal.WebUI%2FSingleSignOn.aspx&client-request-id=858AF",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1120284.jpg",
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
        entryUrl: "https://fspro.ecoembes.com/adfs/ls?version=1.0&action=signin&realm=urn%3AAppProxy%3Acom&appRealm=ab03468a-2bfe-e811-8114-005056b119d5&returnUrl=https%3A%2F%2Fsso.ecoembes.com%2FEcoembes.SGC.ServiciosPortal.WebUI%2FSingleSignOn.aspx&client-request-id=858AF",
    }

    constructor() {
        super(EcoembesCollector.CONFIG);
    }
}
