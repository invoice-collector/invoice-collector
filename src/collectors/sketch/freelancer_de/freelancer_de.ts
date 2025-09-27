
import { SketchCollector } from '../../sketchCollector';

export class FreelancerDeCollector extends SketchCollector {

    static CONFIG = {
        id: "freelancer_de",
        name: "Freelancer.de",
        description: "i18n.collectors.freelancer_de.description",
        version: "0",
        website: "https://www.freelancer.de/login?goto=YjFiMzg4ZTQ5ODBlMDc2NDM1MDJmNTU4YjhmOTUyMTRodHRwczovL3d3dy5mcmVlbGFuY2VyLmNvbS9wYXltZW50cy90cmFuc2FjdGlvbnMucGhw",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9911.jpg",
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
        entryUrl: "https://www.freelancer.de/login?goto=YjFiMzg4ZTQ5ODBlMDc2NDM1MDJmNTU4YjhmOTUyMTRodHRwczovL3d3dy5mcmVlbGFuY2VyLmNvbS9wYXltZW50cy90cmFuc2FjdGlvbnMucGhw",
    }

    constructor() {
        super(FreelancerDeCollector.CONFIG);
    }
}
