
import { SketchCollector } from '../../sketchCollector';

export class InnovationGroupCollector extends SketchCollector {

    static CONFIG = {
        id: "innovation_group",
        name: "Innovation Group",
        description: "i18n.collectors.innovation_group.description",
        version: "0",
        website: "http://www.innovation-group.parts/innovation/kundenportal/login.php?id=0",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1471228.jpg",
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
        entryUrl: "http://www.innovation-group.parts/innovation/kundenportal/login.php?id=0",
    }

    constructor() {
        super(InnovationGroupCollector.CONFIG);
    }
}
