
import { SketchCollector } from '../../sketchCollector';

export class InfinidentSolutionsCollector extends SketchCollector {

    static CONFIG = {
        id: "infinident_solutions",
        name: "Infinident Solutions",
        description: "i18n.collectors.infinident_solutions.description",
        version: "0",
        website: "https://erp.infinidentsolutions.com/Infinident_myo/web/Portal-infinident_sol_myo-1/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2214174.jpg",
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
        entryUrl: "https://erp.infinidentsolutions.com/Infinident_myo/web/Portal-infinident_sol_myo-1/",
    }

    constructor() {
        super(InfinidentSolutionsCollector.CONFIG);
    }
}
