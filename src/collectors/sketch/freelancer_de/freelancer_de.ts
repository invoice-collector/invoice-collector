
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FreelancerDeCollector extends SketchCollector {

    static CONFIG = {
        id: "freelancer_de",
        name: "Freelancer.de",
        description: "i18n.collectors.freelancer_de.description",
        version: "0",
        website: "https://www.freelancer.de/login?goto=YjFiMzg4ZTQ5ODBlMDc2NDM1MDJmNTU4YjhmOTUyMTRodHRwczovL3d3dy5mcmVlbGFuY2VyLmNvbS9wYXltZW50cy90cmFuc2FjdGlvbnMucGhw",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9911.jpg",
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
        loginUrl: "https://www.freelancer.de/login?goto=YjFiMzg4ZTQ5ODBlMDc2NDM1MDJmNTU4YjhmOTUyMTRodHRwczovL3d3dy5mcmVlbGFuY2VyLmNvbS9wYXltZW50cy90cmFuc2FjdGlvbnMucGhw",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FreelancerDeCollector.CONFIG);
    }
}
