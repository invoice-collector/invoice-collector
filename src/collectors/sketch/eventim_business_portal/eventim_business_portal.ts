
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EventimBusinessPortalCollector extends SketchCollector {

    static CONFIG = {
        id: "eventim_business_portal",
        name: "Eventim Business Portal",
        description: "i18n.collectors.eventim_business_portal.description",
        version: "0",
        website: "https://api.eventim.com/identity/auth/realms/tdl-de/protocol/openid-connect/auth?client_id=partnerportal__tdl-de&response_type=code&state=48b1f490db3bca4ba73595648dc8b3f7494ecc67&redirect_uri=https%3A%2F%2Fwww.eventim-business.de%2F%3Frealm%3Dtdl-de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/167021.jpg",
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
        loginUrl: "https://api.eventim.com/identity/auth/realms/tdl-de/protocol/openid-connect/auth?client_id=partnerportal__tdl-de&response_type=code&state=48b1f490db3bca4ba73595648dc8b3f7494ecc67&redirect_uri=https%3A%2F%2Fwww.eventim-business.de%2F%3Frealm%3Dtdl-de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EventimBusinessPortalCollector.CONFIG);
    }
}
