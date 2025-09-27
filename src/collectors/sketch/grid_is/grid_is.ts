
import { SketchCollector } from '../../sketchCollector';

export class GridIsCollector extends SketchCollector {

    static CONFIG = {
        id: "grid_is",
        name: "Grid.is",
        description: "i18n.collectors.grid_is.description",
        version: "0",
        website: "https://grid.is/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2063512.jpg",
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
        entryUrl: "https://grid.is/settings/billing",
    }

    constructor() {
        super(GridIsCollector.CONFIG);
    }
}
