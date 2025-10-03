
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MazeCollector extends SketchCollector {

    static CONFIG = {
        id: "maze",
        name: "MAZE",
        description: "i18n.collectors.maze.description",
        version: "0",
        website: "https://maze.design/settings/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/396401.jpg",
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
        entryUrl: "https://maze.design/settings/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MazeCollector.CONFIG);
    }
}
