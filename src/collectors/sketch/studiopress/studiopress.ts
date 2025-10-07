
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StudiopressCollector extends SketchCollector {

    static CONFIG = {
        id: "studiopress",
        name: "StudioPress",
        description: "i18n.collectors.studiopress.description",
        version: "0",
        website: "https://my.studiopress.com/wp-login.php?redirect_to=https%3A%2F%2Fmy.studiopress.com%2F%2F%3F_ga%3D2.24493562.1974328791.1524113316-104450928.1524113316",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/49241.jpg",
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
        entryUrl: "https://my.studiopress.com/wp-login.php?redirect_to=https%3A%2F%2Fmy.studiopress.com%2F%2F%3F_ga%3D2.24493562.1974328791.1524113316-104450928.1524113316",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StudiopressCollector.CONFIG);
    }
}
