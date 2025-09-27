
import { SketchCollector } from '../../sketchCollector';

export class TreeNationAsblCollector extends SketchCollector {

    static CONFIG = {
        id: "tree_nation_asbl",
        name: "Tree-Nation ASBL",
        description: "i18n.collectors.tree_nation_asbl.description",
        version: "0",
        website: "https://tree-nation.com/userProfile/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778989.jpg",
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
        entryUrl: "https://tree-nation.com/userProfile/billing",
    }

    constructor() {
        super(TreeNationAsblCollector.CONFIG);
    }
}
