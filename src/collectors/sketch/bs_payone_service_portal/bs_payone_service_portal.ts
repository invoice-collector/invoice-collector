
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BsPayoneServicePortalCollector extends SketchCollector {

    static CONFIG = {
        id: "bs_payone_service_portal",
        name: "BS PAYONE - Service Portal",
        description: "i18n.collectors.bs_payone_service_portal.description",
        version: "0",
        website: "https://portal.bs-card-service.com/login?ReturnUrl=%2fsfsts.axd%3frealm%3dhttps%253a%252f%252fportal.bs-card-service.com%26redirect_uri%3dhttps%253a%252f%252fportal.bs-card-service.com%252fcms%252f%253fsf-hru%253dtrue%26deflate%3dtrue&realm=https%3a%2f%2f",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/80522.jpg",
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
        entryUrl: "https://portal.bs-card-service.com/login?ReturnUrl=%2fsfsts.axd%3frealm%3dhttps%253a%252f%252fportal.bs-card-service.com%26redirect_uri%3dhttps%253a%252f%252fportal.bs-card-service.com%252fcms%252f%253fsf-hru%253dtrue%26deflate%3dtrue&realm=https%3a%2f%2f",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BsPayoneServicePortalCollector.CONFIG);
    }
}
