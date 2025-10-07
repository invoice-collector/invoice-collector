
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WpGridBuilderCollector extends SketchCollector {

    static CONFIG = {
        id: "wp_grid_builder",
        name: "WP Grid Builder",
        description: "i18n.collectors.wp_grid_builder.description",
        version: "0",
        website: "https://wpgridbuilder.com/account/purchases/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3076512.jpg",
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
        entryUrl: "https://wpgridbuilder.com/account/purchases/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WpGridBuilderCollector.CONFIG);
    }
}
