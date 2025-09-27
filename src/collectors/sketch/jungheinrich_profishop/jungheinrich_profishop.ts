
import { SketchCollector } from '../../sketchCollector';

export class JungheinrichProfishopCollector extends SketchCollector {

    static CONFIG = {
        id: "jungheinrich_profishop",
        name: "Jungheinrich ProfiShop",
        description: "i18n.collectors.jungheinrich_profishop.description",
        version: "0",
        website: "https://www.jh-profishop.de/?gclid=EAIaIQobChMI-aO4gJT6_gIVSvCyCh0hZgo5EAAYAiAAEgJxR_D_BwE&gclsrc=aw.ds",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1932188.jpg",
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
        entryUrl: "https://www.jh-profishop.de/?gclid=EAIaIQobChMI-aO4gJT6_gIVSvCyCh0hZgo5EAAYAiAAEgJxR_D_BwE&gclsrc=aw.ds",
    }

    constructor() {
        super(JungheinrichProfishopCollector.CONFIG);
    }
}
