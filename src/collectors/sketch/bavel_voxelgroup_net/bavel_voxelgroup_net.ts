
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BavelVoxelgroupNetCollector extends SketchCollector {

    static CONFIG = {
        id: "bavel_voxelgroup_net",
        name: "bavel.voxelgroup.net",
        description: "i18n.collectors.bavel_voxelgroup_net.description",
        version: "0",
        website: "bavelfinder.voxelgroup.net",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1875853.jpg",
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
        entryUrl: "bavelfinder.voxelgroup.net",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BavelVoxelgroupNetCollector.CONFIG);
    }
}
