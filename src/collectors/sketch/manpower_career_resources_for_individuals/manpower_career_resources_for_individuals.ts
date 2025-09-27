
import { SketchCollector } from '../../sketchCollector';

export class ManpowerCareerResourcesForIndividualsCollector extends SketchCollector {

    static CONFIG = {
        id: "manpower_career_resources_for_individuals",
        name: "Manpower - Career resources - for individuals",
        description: "i18n.collectors.manpower_career_resources_for_individuals.description",
        version: "0",
        website: "https://www.manpower.com/wps/portal/ManpowerUSA/career-resources",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107841.jpg",
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
        entryUrl: "https://www.manpower.com/wps/portal/ManpowerUSA/career-resources",
    }

    constructor() {
        super(ManpowerCareerResourcesForIndividualsCollector.CONFIG);
    }
}
