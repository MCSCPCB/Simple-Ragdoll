// Simple Ragdoll 0.1.0
(() => {
  // lang/en.json
  var en_default = {
    "ragdoll.title": "Simple Ragdoll",
    "ragdoll.description": "Generate Bedrock ragdolls from entity models.",
    "ragdoll.mode": "Ragdoll",
    "ragdoll.pack": "Resource Pack",
    "ragdoll.config": "Physics Configuration",
    "ragdoll.menu_import": "Import Ragdoll Resource Pack...",
    "ragdoll.menu_export": "Export Ragdoll Resource Pack...",
    "ragdoll.menu_browser": "Ragdoll Entities...",
    "ragdoll.tool_move": "Move",
    "ragdoll.tool_move_tip": "Move the selected collision box, center of mass or joint",
    "ragdoll.tool_resize": "Resize",
    "ragdoll.tool_resize_tip": "Resize the selected collision box",
    "ragdoll.tool_rotate": "Rotate",
    "ragdoll.tool_rotate_tip": "Rotate the selected collision box or joint",
    "ragdoll.play_preview": "Play Physics Preview",
    "ragdoll.pause_preview": "Pause Physics Preview",
    "ragdoll.reset_preview": "Reset Physics Preview",
    "ragdoll.preview_animation": "Preview Ragdoll from Current Frame",
    "ragdoll.preview_animation_tip": "Simulate physics starting from the current animation pose without writing keyframes",
    "ragdoll.preview_locked": "Previewing. Reset the preview to edit.",
    "ragdoll.empty_state_model": "This model has no ragdoll yet. Rigid bodies and joints can be generated from its bones.",
    "ragdoll.empty_state_project": "Open a Bedrock entity model, or open an entity from a resource pack.",
    "ragdoll.create_ragdoll": "Generate Ragdoll",
    "ragdoll.panel_structure": "Ragdoll",
    "ragdoll.panel_properties": "Physics Properties",
    "ragdoll.variant_default": "Default",
    "ragdoll.variant_tip": "Model to edit",
    "ragdoll.section_models": "Models",
    "ragdoll.variant_when": "Use the %0 model when",
    "ragdoll.variant_default_note": "The %0 model is used when no condition matches.",
    "ragdoll.section_entity": "Entity",
    "ragdoll.scale": "Model Scale",
    "ragdoll.scale_tip": "Effective in-game scale used to convert physics sizes. Reads scripts.scale automatically, defaults to 1 when undetermined, and can be edited manually.",
    "ragdoll.section_trigger": "Trigger",
    "ragdoll.trigger": "Become Ragdoll",
    "ragdoll.release": "Recover",
    "ragdoll.trigger_hurt": "When Hurt",
    "ragdoll.release_healed": "When Fully Healed",
    "ragdoll.custom": "Custom Molang",
    "ragdoll.custom_condition": "Molang Condition",
    "ragdoll.section_simulation": "Simulation",
    "ragdoll.gravity": "Gravity (blocks/s²)",
    "ragdoll.gravity_tip": "Downward acceleration in blocks per second squared.",
    "ragdoll.section_performance": "Performance",
    "ragdoll.performance_tip": "Higher values are more stable and cost more Molang time.",
    "ragdoll.frequency": "Simulation Rate (Hz)",
    "ragdoll.frequency_tip": "Physics steps computed per second.",
    "ragdoll.iterations": "Solver Iterations",
    "ragdoll.iterations_tip": "How many times contacts and joints are solved per step.",
    "ragdoll.contact_limit": "Contact Limit",
    "ragdoll.contact_limit_tip": "Maximum contact points handled per step.",
    "ragdoll.section_collision": "Self-Collision",
    "ragdoll.output_size": "Output File Size",
    "ragdoll.output_size_tip": "Estimated size of the exported file. Smaller files have lower overhead, but the simulation is less stable.",
    "ragdoll.output_standard": "Standard",
    "ragdoll.output_light": "Light",
    "ragdoll.output_medium": "Medium",
    "ragdoll.output_heavy": "Heavy",
    "ragdoll.collision_count": "%0 part pairs collide with each other",
    "ragdoll.auto_collision": "Set Automatically",
    "ragdoll.auto_collision_tip": "Checks all selected models. Initially overlapping parts and parts touching at a joint are excluded; all other parts collide.",
    "ragdoll.section_pack": "Resource Pack",
    "ragdoll.link_linked": "Exported into %0.",
    "ragdoll.link_unloaded": "Import the resource pack of this entity before exporting.",
    "ragdoll.link_standalone": "This model is not linked to an entity in a resource pack yet. Only the physics configuration can be exported.",
    "ragdoll.link_entity": "Link Entity...",
    "ragdoll.link_title": "Link Resource Pack Entity",
    "ragdoll.link_tip": "The physics configuration moves to the chosen entity. Export keeps its animations, materials and textures; an edited model is written back to the pack.",
    "ragdoll.link_button": "Link",
    "ragdoll.link_none": "No entity in the resource pack uses model %0.",
    "ragdoll.bone_follows": "Bones without a rigid body follow %0.",
    "ragdoll.bone_free": "This bone has no rigid body and none above it, so it keeps its pose.",
    "ragdoll.add_body": "Add Rigid Body",
    "ragdoll.remove_body": "Remove Rigid Body",
    "ragdoll.section_mass": "Mass",
    "ragdoll.mass_mode": "Mass From",
    "ragdoll.mass_density": "Density",
    "ragdoll.mass_fixed": "Fixed Mass",
    "ragdoll.density": "Density (kg/m³)",
    "ragdoll.mass": "Mass (kg)",
    "ragdoll.center": "Center of Mass",
    "ragdoll.auto": "Auto",
    "ragdoll.reset_auto": "Back to Automatic",
    "ragdoll.per_model_note": "Mass, center of mass and collision boxes are stored per model.",
    "ragdoll.section_material": "Material",
    "ragdoll.friction": "Friction",
    "ragdoll.restitution": "Bounciness",
    "ragdoll.section_damping": "Damping",
    "ragdoll.linear_damping": "Linear Damping",
    "ragdoll.angular_damping": "Angular Damping",
    "ragdoll.section_self_collision": "Collides With",
    "ragdoll.self_collision_tip": "Checked parts block each other.",
    "ragdoll.add_shape": "Add Collision Box",
    "ragdoll.remove_shape": "Delete Collision Box",
    "ragdoll.refit": "Refit",
    "ragdoll.refit_tip": "Use one collision box around the cubes of this bone and of the bones below it without a rigid body.",
    "ragdoll.shape_n": "Collision Box %0",
    "ragdoll.position": "Position",
    "ragdoll.size": "Size",
    "ragdoll.rotation": "Rotation",
    "ragdoll.orientation": "Orientation",
    "ragdoll.add_joint": "Add Joint...",
    "ragdoll.remove_joint": "Delete Joint",
    "ragdoll.section_connection": "Connection",
    "ragdoll.joint_parent": "to %0",
    "ragdoll.joint_a": "Parent Body",
    "ragdoll.joint_b": "Child Body",
    "ragdoll.joint_body_tip": "After changing a body, the joint returns to the pivot of the child bone.",
    "ragdoll.section_frame": "Joint",
    "ragdoll.reset_position": "Back to Bone Pivot",
    "ragdoll.reset_rotation": "Back to Bone Orientation",
    "ragdoll.mismatch": "The two ends of this joint do not line up, so the parts are pulled together when the simulation starts.",
    "ragdoll.align_joint": "Align Both Ends",
    "ragdoll.section_limits": "Limits",
    "ragdoll.swing": "Swing (°)",
    "ragdoll.swing_tip": "Largest angle the child body may tilt away from the joint Y axis, shown as the green cone.",
    "ragdoll.twist": "Twist (°)",
    "ragdoll.twist_tip": "Largest twist around the joint Y axis, shown as the red fan.",
    "ragdoll.drop_missing": "Remove rigid bodies whose bones no longer exist: %0",
    "ragdoll.import_config": "Import Physics Configuration...",
    "ragdoll.export_config": "Export Physics Configuration...",
    "ragdoll.edit_label": "Edit ragdoll",
    "ragdoll.replace_pack": "Import another resource pack? Open projects stay open; exports use the new pack.",
    "ragdoll.browser_title": "Ragdoll Entities",
    "ragdoll.no_pack": "No resource pack imported",
    "ragdoll.import_pack_button": "Import Resource Pack...",
    "ragdoll.replace_pack_button": "Replace Resource Pack...",
    "ragdoll.export_button": "Export...",
    "ragdoll.no_entities": "No entities",
    "ragdoll.no_pack_hint": "Import a .mcpack or .zip to list its entities.",
    "ragdoll.browser_hint": "Double-click to open an entity. Ragdolls are generated from the bones on import and can be adjusted after opening.",
    "ragdoll.open": "Open",
    "ragdoll.close": "Close",
    "ragdoll.cancel": "Cancel",
    "ragdoll.confirm": "Confirm",
    "ragdoll.entity": "Entity",
    "ragdoll.status_ready": "Configured",
    "ragdoll.status_invalid": "Invalid configuration",
    "ragdoll.status_unconfigured": "Cannot generate",
    "ragdoll.status_missing": "Missing model",
    "ragdoll.status_unsupported": "Not applicable",
    "ragdoll.detail_missing": "Missing model: %0",
    "ragdoll.detail_unsupported": "Projectiles, vehicles and similar entities do not get ragdolls.",
    "ragdoll.export_title": "Export Ragdoll Resource Pack",
    "ragdoll.export_no_pack": "Import the source resource pack before exporting.",
    "ragdoll.pack_name": "Pack Name",
    "ragdoll.export_entities": "Export %0 entities",
    "ragdoll.select_all": "Select All",
    "ragdoll.deselect_all": "Select None",
    "ragdoll.export_unlinked": "These projects are not linked to a resource pack entity and are not exported: %0",
    "ragdoll.export_confirm": "Export",
    "ragdoll.reading": "Reading resource pack...",
    "ragdoll.generating": "Generating: %0",
    "ragdoll.exported": "Exported %0 entities.",
    "ragdoll.error_title": "Ragdoll Error",
    "ragdoll.preview_error": "Cannot Preview",
    "ragdoll.error.number": "%0 must be a finite number between %1 and %2.",
    "ragdoll.error.vector": "%0 must contain three numbers.",
    "ragdoll.error.field": "%0: unsupported field %1.",
    "ragdoll.error.molang": "%0 must be one Molang expression.",
    "ragdoll.error.zero_axis": "%0 cannot be a zero vector.",
    "ragdoll.error.integer": "%0 must be an integer.",
    "ragdoll.error.tags": "Invalid tags: %0.",
    "ragdoll.error.include_tags": "includeTags cannot be empty.",
    "ragdoll.error.format": "Physics formatVersion must be 1.",
    "ragdoll.error.body_count": "Use between 1 and 32 rigid bodies.",
    "ragdoll.error.body_id": "Body identifiers must contain only letters, numbers and underscores.",
    "ragdoll.error.variants": "The last model must be the only default model.",
    "ragdoll.error.bone_name": "Invalid bone: %0.",
    "ragdoll.error.duplicate_bone": "Bone is bound more than once: %0.",
    "ragdoll.error.geometry": "Missing model: %0.",
    "ragdoll.error.geometry_reference": "Client definition does not reference model: %0.",
    "ragdoll.error.duplicate_geometry_bone": "Duplicate bones in %0.",
    "ragdoll.error.bone_cycle": "Bone hierarchy cycle: %0.",
    "ragdoll.error.bone_missing": "Missing bone: %0.",
    "ragdoll.error.variant_body": "Unknown variant body: %0.",
    "ragdoll.error.bone_in_geometry": "%0: missing bone %1.",
    "ragdoll.error.variant_binding": "Model variants cannot change the bone binding of %0.",
    "ragdoll.error.empty_shapes": "%0 has no collision shapes.",
    "ragdoll.error.shape_type": "Unsupported collision shape: %0.",
    "ragdoll.error.shape_size": "%0: collision dimensions must be positive.",
    "ragdoll.error.joint_type": "Unsupported joint type: %0.",
    "ragdoll.error.joint_body": "Invalid body references in joint %0.",
    "ragdoll.error.variant_joint": "Unknown variant joint: %0.",
    "ragdoll.error.topology": "Model variants must have matching body topology and collision box counts.",
    "ragdoll.error.pairs": "collisionPairs must contain pairs of body identifiers.",
    "ragdoll.error.pair_reference": "Invalid collision pair: %0.",
    "ragdoll.error.pair_duplicate": "Duplicate collision pairs.",
    "ragdoll.error.joint_order": "jointOrder must contain every joint exactly once.",
    "ragdoll.error.chunk": "A single Molang loop or expression is too long (%0 / %1 characters).",
    "ragdoll.error.expression": "Unsupported expression: %0.",
    "ragdoll.error.preview_query": "Preview query is unavailable: %0.",
    "ragdoll.error.unexpected": "%0",
    "ragdoll.error.json": "Invalid JSON: %0.",
    "ragdoll.error.archive_path": "Invalid archive path: %0.",
    "ragdoll.error.archive_size": "Resource pack exceeds the import limit.",
    "ragdoll.error.client_duplicate": "Duplicate entity: %0.",
    "ragdoll.error.no_entities": "No entity definitions found.",
    "ragdoll.error.already_generated": "Entity already contains generated ragdoll code: %0.",
    "ragdoll.error.alias": "Animation alias already exists: %0.",
    "ragdoll.error.selection": "Select at least one configured entity.",
    "ragdoll.error.not_configured": "%0: physics configuration is missing.",
    "ragdoll.error.missing_source": "Import the resource pack for %0.",
    "ragdoll.error.nonuniform": "Preview does not support non-uniform or mirrored bone scales.",
    "ragdoll.error.last_body": "At least one rigid body is required.",
    "ragdoll.error.last_shape": "At least one collision box is required.",
    "ragdoll.error.entity_missing": "Entity not found in resource pack: %0.",
    "ragdoll.error.empty_model": "The model has no cubes, so no rigid bodies can be generated.",
    "ragdoll.error.link_conflict": "%0 is already open in another project.",
    "ragdoll.error.joint_duplicate": "These two rigid bodies are already connected by a joint.",
    "ragdoll.select_models": "Select Models...",
    "ragdoll.default_model": "Default Model",
    "ragdoll.error.model_duplicate": "Each model alias can only be selected once."
  };

  // lang/zh.json
  var zh_default = {
    "ragdoll.title": "Simple Ragdoll",
    "ragdoll.description": "从基岩版实体模型生成布娃娃",
    "ragdoll.mode": "布娃娃",
    "ragdoll.pack": "资源包",
    "ragdoll.config": "物理配置",
    "ragdoll.menu_import": "导入布娃娃资源包...",
    "ragdoll.menu_export": "导出布娃娃资源包...",
    "ragdoll.menu_browser": "布娃娃实体...",
    "ragdoll.tool_move": "移动",
    "ragdoll.tool_move_tip": "移动选中的碰撞盒、质心或关节。",
    "ragdoll.tool_resize": "缩放",
    "ragdoll.tool_resize_tip": "调整选中碰撞盒的大小",
    "ragdoll.tool_rotate": "旋转",
    "ragdoll.tool_rotate_tip": "旋转选中的碰撞盒或关节朝向",
    "ragdoll.play_preview": "播放物理预览",
    "ragdoll.pause_preview": "暂停物理预览",
    "ragdoll.reset_preview": "重置物理预览",
    "ragdoll.preview_animation": "从当前帧预览布娃娃",
    "ragdoll.preview_animation_tip": "以当前动画姿态为起点模拟物理，不写入关键帧。",
    "ragdoll.preview_locked": "正在预览。重置预览后可编辑",
    "ragdoll.empty_state_model": "这个模型还没有布娃娃。可以按骨骼自动生成刚体和关节",
    "ragdoll.empty_state_project": "打开基岩版实体模型，或从资源包中打开实体。",
    "ragdoll.create_ragdoll": "生成布娃娃",
    "ragdoll.panel_structure": "布娃娃",
    "ragdoll.panel_properties": "物理属性",
    "ragdoll.variant_default": "默认",
    "ragdoll.variant_tip": "要编辑的模型",
    "ragdoll.section_models": "模型",
    "ragdoll.variant_when": "使用%0模型的条件",
    "ragdoll.variant_default_note": "条件都不满足时使用%0模型",
    "ragdoll.section_entity": "实体",
    "ragdoll.scale": "模型缩放",
    "ragdoll.scale_tip": "实体在游戏中的有效缩放，用于换算物理尺寸。自动读取 scripts.scale，无法确定时取 1，可手动修改。",
    "ragdoll.section_trigger": "触发",
    "ragdoll.trigger": "进入布娃娃",
    "ragdoll.release": "恢复",
    "ragdoll.trigger_hurt": "受伤时",
    "ragdoll.release_healed": "生命值回满时",
    "ragdoll.custom": "自定义 Molang",
    "ragdoll.custom_condition": "Molang 条件",
    "ragdoll.section_simulation": "模拟",
    "ragdoll.gravity": "重力（格/秒²）",
    "ragdoll.gravity_tip": "向下的加速度，单位是格每二次方秒。",
    "ragdoll.section_performance": "性能",
    "ragdoll.performance_tip": "数值越高越稳定，Molang 开销也越大。",
    "ragdoll.frequency": "模拟频率（Hz）",
    "ragdoll.frequency_tip": "每秒计算的物理步数",
    "ragdoll.iterations": "求解迭代",
    "ragdoll.iterations_tip": "每步求解接触和关节的次数",
    "ragdoll.contact_limit": "接触上限",
    "ragdoll.contact_limit_tip": "每步最多处理的接触点数量",
    "ragdoll.section_collision": "自身碰撞",
    "ragdoll.output_size": "输出文件大小",
    "ragdoll.output_size_tip": "导出后文件预计大小，越小的情况下开销越低，但同时模拟越不稳定。",
    "ragdoll.output_standard": "标准",
    "ragdoll.output_light": "轻度简化",
    "ragdoll.output_medium": "中度简化",
    "ragdoll.output_heavy": "重度简化",
    "ragdoll.collision_count": "%0 对部件会互相碰撞",
    "ragdoll.auto_collision": "自动设置",
    "ragdoll.auto_collision_tip": "检查所有已选模型。排除初始重叠的部件，以及关节处紧贴的部件；其余部件互相碰撞。",
    "ragdoll.section_pack": "资源包",
    "ragdoll.link_linked": "导出时写入 %0",
    "ragdoll.link_unloaded": "导出前需要导入这个实体所在的资源包",
    "ragdoll.link_standalone": "这个模型还没有关联资源包中的实体，目前只能导出物理配置。",
    "ragdoll.link_entity": "关联实体...",
    "ragdoll.link_title": "关联资源包实体",
    "ragdoll.link_tip": "物理配置会转到所选实体。导出时保留它原有的动画、材质和纹理；编辑过的模型会写回资源包。",
    "ragdoll.link_button": "关联",
    "ragdoll.link_none": "资源包中没有实体使用模型 %0",
    "ragdoll.bone_follows": "没有刚体的骨骼跟随 %0 运动",
    "ragdoll.bone_free": "没有刚体的骨骼，上方也没有刚体，保持原有姿态。",
    "ragdoll.add_body": "添加刚体",
    "ragdoll.remove_body": "移除刚体",
    "ragdoll.section_mass": "质量",
    "ragdoll.mass_mode": "质量计算",
    "ragdoll.mass_density": "按密度",
    "ragdoll.mass_fixed": "指定质量",
    "ragdoll.density": "密度（kg/m³）",
    "ragdoll.mass": "质量（kg）",
    "ragdoll.center": "质心",
    "ragdoll.auto": "自动",
    "ragdoll.reset_auto": "恢复自动",
    "ragdoll.per_model_note": "质量、质心和碰撞盒按模型分别保存。",
    "ragdoll.section_material": "材质",
    "ragdoll.friction": "摩擦",
    "ragdoll.restitution": "弹性",
    "ragdoll.section_damping": "阻尼",
    "ragdoll.linear_damping": "线性阻尼",
    "ragdoll.angular_damping": "角阻尼",
    "ragdoll.section_self_collision": "与其他部件碰撞",
    "ragdoll.self_collision_tip": "勾选的部件会互相阻挡",
    "ragdoll.add_shape": "添加碰撞盒",
    "ragdoll.remove_shape": "删除碰撞盒",
    "ragdoll.refit": "重新拟合",
    "ragdoll.refit_tip": "用一个碰撞盒包住这根骨骼及其下没有刚体的骨骼的方块",
    "ragdoll.shape_n": "碰撞盒 %0",
    "ragdoll.position": "位置",
    "ragdoll.size": "大小",
    "ragdoll.rotation": "旋转",
    "ragdoll.orientation": "朝向",
    "ragdoll.add_joint": "添加关节...",
    "ragdoll.remove_joint": "删除关节",
    "ragdoll.section_connection": "连接",
    "ragdoll.joint_parent": "连接 %0",
    "ragdoll.joint_a": "父刚体",
    "ragdoll.joint_b": "子刚体",
    "ragdoll.joint_body_tip": "更换刚体后，关节回到子刚体骨骼的枢轴点。",
    "ragdoll.section_frame": "关节",
    "ragdoll.reset_position": "回到骨骼枢轴点",
    "ragdoll.reset_rotation": "回到骨骼朝向",
    "ragdoll.mismatch": "关节两端的连接点或方向不一致，模拟开始时部件会被拉扯。",
    "ragdoll.align_joint": "对齐两端",
    "ragdoll.section_limits": "限制",
    "ragdoll.swing": "摆动（°）",
    "ragdoll.swing_tip": "子刚体偏离关节 Y 轴的最大角度，视图中显示为绿色圆锥。",
    "ragdoll.twist": "扭转（°）",
    "ragdoll.twist_tip": "绕关节 Y 轴扭转的最大角度，视图中显示为红色扇形。",
    "ragdoll.drop_missing": "移除骨骼已不存在的刚体：%0。",
    "ragdoll.import_config": "导入物理配置...",
    "ragdoll.export_config": "导出物理配置...",
    "ragdoll.edit_label": "编辑布娃娃",
    "ragdoll.replace_pack": "导入另一个资源包？已打开的项目保留，导出时使用新的资源包。",
    "ragdoll.browser_title": "布娃娃实体",
    "ragdoll.no_pack": "未导入资源包",
    "ragdoll.import_pack_button": "导入资源包...",
    "ragdoll.replace_pack_button": "更换资源包...",
    "ragdoll.export_button": "导出...",
    "ragdoll.no_entities": "没有实体",
    "ragdoll.no_pack_hint": "导入 .mcpack 或 .zip 后列出其中的实体",
    "ragdoll.browser_hint": "双击打开实体。导入时会按骨骼自动生成布娃娃，打开后可以调整。",
    "ragdoll.open": "打开",
    "ragdoll.close": "关闭",
    "ragdoll.cancel": "取消",
    "ragdoll.confirm": "确定",
    "ragdoll.entity": "实体",
    "ragdoll.status_ready": "已配置",
    "ragdoll.status_invalid": "配置无效",
    "ragdoll.status_unconfigured": "无法自动生成",
    "ragdoll.status_missing": "缺少模型",
    "ragdoll.status_unsupported": "不适用",
    "ragdoll.detail_missing": "缺少模型：%0。",
    "ragdoll.detail_unsupported": "投射物、载具等实体不生成布娃娃。",
    "ragdoll.export_title": "导出布娃娃资源包",
    "ragdoll.export_no_pack": "导出需要先导入源资源包",
    "ragdoll.pack_name": "资源包名称",
    "ragdoll.export_entities": "导出 %0 个实体",
    "ragdoll.select_all": "全选",
    "ragdoll.deselect_all": "全不选",
    "ragdoll.export_unlinked": "以下项目没有关联资源包实体，不会导出：%0。",
    "ragdoll.export_confirm": "导出",
    "ragdoll.reading": "正在读取资源包...",
    "ragdoll.generating": "正在生成：%0。",
    "ragdoll.exported": "已导出 %0 个实体",
    "ragdoll.error_title": "布娃娃错误",
    "ragdoll.preview_error": "无法预览",
    "ragdoll.error.number": "%0 必须为 %1 至 %2 之间的有限数字",
    "ragdoll.error.vector": "%0 必须包含三个数字",
    "ragdoll.error.field": "%0：不支持字段 %1。",
    "ragdoll.error.molang": "%0 必须是单个 Molang 表达式",
    "ragdoll.error.zero_axis": "%0 不能为零向量",
    "ragdoll.error.integer": "%0 必须为整数",
    "ragdoll.error.tags": "标签无效：%0。",
    "ragdoll.error.include_tags": "includeTags 不能为空",
    "ragdoll.error.format": "物理配置 formatVersion 必须为 1",
    "ragdoll.error.body_count": "刚体数量必须为 1 至 32",
    "ragdoll.error.body_id": "刚体标识只能包含字母、数字和下划线。",
    "ragdoll.error.variants": "最后一个模型必须是唯一的默认模型",
    "ragdoll.error.bone_name": "骨骼无效：%0。",
    "ragdoll.error.duplicate_bone": "骨骼被重复绑定：%0。",
    "ragdoll.error.geometry": "缺少模型：%0。",
    "ragdoll.error.geometry_reference": "客户端定义未引用模型：%0。",
    "ragdoll.error.duplicate_geometry_bone": "%0 包含重复骨骼",
    "ragdoll.error.bone_cycle": "骨骼层级循环：%0。",
    "ragdoll.error.bone_missing": "缺少骨骼：%0。",
    "ragdoll.error.variant_body": "模型变体引用未知刚体：%0。",
    "ragdoll.error.bone_in_geometry": "%0：缺少骨骼 %1。",
    "ragdoll.error.variant_binding": "模型变体不能改变 %0 的骨骼绑定",
    "ragdoll.error.empty_shapes": "%0 没有碰撞形状",
    "ragdoll.error.shape_type": "不支持的碰撞形状：%0。",
    "ragdoll.error.shape_size": "%0：碰撞盒尺寸必须大于零。",
    "ragdoll.error.joint_type": "不支持的关节类型：%0。",
    "ragdoll.error.joint_body": "关节 %0 的刚体引用无效",
    "ragdoll.error.variant_joint": "模型变体引用未知关节：%0。",
    "ragdoll.error.topology": "模型变体的刚体拓扑和碰撞盒数量必须一致",
    "ragdoll.error.pairs": "collisionPairs 必须为刚体标识对",
    "ragdoll.error.pair_reference": "碰撞对象无效：%0。",
    "ragdoll.error.pair_duplicate": "存在重复碰撞对象",
    "ragdoll.error.joint_order": "jointOrder 必须包含每个关节且不重复",
    "ragdoll.error.chunk": "单个 Molang 循环或表达式过长（%0 / %1 字符）",
    "ragdoll.error.expression": "不支持的表达式：%0。",
    "ragdoll.error.preview_query": "预览不支持查询：%0。",
    "ragdoll.error.unexpected": "%0",
    "ragdoll.error.json": "JSON 无效：%0。",
    "ragdoll.error.archive_path": "资源包路径无效：%0。",
    "ragdoll.error.archive_size": "资源包超过导入大小限制",
    "ragdoll.error.client_duplicate": "实体重复：%0。",
    "ragdoll.error.no_entities": "未找到实体定义",
    "ragdoll.error.already_generated": "实体已包含生成的布娃娃代码：%0。",
    "ragdoll.error.alias": "动画别名已存在：%0。",
    "ragdoll.error.selection": "至少选择一个已配置实体",
    "ragdoll.error.not_configured": "%0：缺少物理配置。",
    "ragdoll.error.missing_source": "请导入 %0 所属的资源包",
    "ragdoll.error.nonuniform": "预览不支持非均匀或镜像骨骼缩放",
    "ragdoll.error.last_body": "至少保留一个刚体",
    "ragdoll.error.last_shape": "至少保留一个碰撞盒",
    "ragdoll.error.entity_missing": "资源包中找不到实体：%0。",
    "ragdoll.error.empty_model": "模型没有方块，无法生成刚体。",
    "ragdoll.error.link_conflict": "%0 已在另一个项目中打开",
    "ragdoll.error.joint_duplicate": "这两个刚体之间已有关节",
    "ragdoll.select_models": "选择模型...",
    "ragdoll.default_model": "默认模型",
    "ragdoll.error.model_duplicate": "同一模型别名不能重复选择"
  };

  // src/i18n.js
  var languages = { en: en_default, zh: zh_default };
  var format = (text, values) => text.replace(/%(\d+)/g, (_, index) => String(values[index] ?? ""));
  function registerTranslations() {
    for (const [code, strings] of Object.entries(languages)) Language.addTranslations(code, strings);
  }
  function t(key2, values = []) {
    const id = `ragdoll.${key2}`;
    if (typeof globalThis.tl === "function") return globalThis.tl(id, values, format(en_default[id] ?? id, values));
    return format(en_default[id] ?? id, values);
  }
  var RagdollError = class extends Error {
    constructor(key2, values = []) {
      super(t(`error.${key2}`, values));
      this.key = key2;
      this.values = values;
    }
  };
  var fail = (key2, values = []) => {
    throw new RagdollError(key2, values);
  };
  var errorText = (error) => error instanceof RagdollError ? t(`error.${error.key}`, error.values) : t("error.unexpected", [error?.message ?? String(error)]);

  // src/resources.js
  function parseJson(source2, label = "JSON") {
    let text = "", quoted = false, escaped = false;
    for (let i = 0; i < source2.length; i++) {
      const c = source2[i], next = source2[i + 1];
      if (quoted) {
        text += c;
        if (escaped) escaped = false;
        else if (c === "\\") escaped = true;
        else if (c === '"') quoted = false;
        continue;
      }
      if (c === '"') {
        quoted = true;
        text += c;
        continue;
      }
      if (c === "/" && next === "/") {
        while (i < source2.length && source2[i] !== "\n") i++;
        text += "\n";
        continue;
      }
      if (c === "/" && next === "*") {
        i += 2;
        while (i < source2.length && !(source2[i] === "*" && source2[i + 1] === "/")) i++;
        i++;
        text += " ";
        continue;
      }
      text += c;
    }
    try {
      return JSON.parse(text.replace(/^\uFEFF/, ""));
    } catch {
      fail("json", [label]);
    }
  }
  function indexResources(files) {
    const resources = { files, clients: /* @__PURE__ */ new Map(), geometries: /* @__PURE__ */ new Map(), geometryFiles: /* @__PURE__ */ new Map(), animations: /* @__PURE__ */ new Map(), controllers: /* @__PURE__ */ new Map(), json: /* @__PURE__ */ new Map() };
    const decoder = new TextDecoder();
    for (const [path, bytes] of files) {
      if (!/\.json$/i.test(path) || !/^(entity|models|animations|animation_controllers|render_controllers)\//.test(path) && path !== "manifest.json") continue;
      const value = parseJson(typeof bytes === "string" ? bytes : decoder.decode(bytes), path);
      resources.json.set(path, value);
      const client = value["minecraft:client_entity"]?.description;
      if (client) {
        if (resources.clients.has(client.identifier)) fail("client_duplicate", [client.identifier]);
        resources.clients.set(client.identifier, { file: path, value });
      }
      const geometries = [...value["minecraft:geometry"] ?? [], ...Object.entries(value).filter(([id]) => id.startsWith("geometry.")).map(([id, g]) => ({ description: { identifier: id }, ...g }))];
      for (const geometry of geometries) {
        const id = geometry.description.identifier;
        resources.geometries.set(id, geometry);
        resources.geometryFiles.set(id, path);
      }
      for (const [id, a] of Object.entries(value.animations ?? {})) resources.animations.set(id, a);
      for (const [id, c] of Object.entries(value.animation_controllers ?? {})) resources.controllers.set(id, c);
    }
    return resources;
  }
  async function importPack(data, Zip) {
    const zip = await Zip.loadAsync(data), entries = Object.values(zip.files).filter((f) => !f.dir), files = /* @__PURE__ */ new Map();
    let total = 0;
    for (const entry of entries) {
      const path = entry.unsafeOriginalName ?? entry.name;
      if (path.includes("\\") || path.startsWith("/") || path.includes(":") || path.split("/").some((p) => p === ".." || p === "")) fail("archive_path", [path]);
      const size = entry._data?.uncompressedSize ?? 0;
      total += size;
      if (total > 256 * 1024 * 1024 || entries.length > 2e4) fail("archive_size");
    }
    const manifests = entries.filter((e) => e.name.endsWith("manifest.json"));
    const prefix = zip.file("manifest.json") ? "" : manifests.length === 1 ? manifests[0].name.slice(0, -"manifest.json".length) : "";
    for (const entry of entries) {
      if (!entry.name.startsWith(prefix)) continue;
      files.set(entry.name.slice(prefix.length), await entry.async("uint8array"));
    }
    const resources = indexResources(files);
    if (!resources.clients.size) fail("no_entities");
    return resources;
  }
  var descriptionOf = (record) => record.value["minecraft:client_entity"].description;
  function relatedAnimations(resources, client) {
    const ids = new Set(Object.values(client.animations ?? {}));
    for (const entry of client.animation_controllers ?? []) for (const id of Object.values(entry)) ids.add(id);
    const seen = /* @__PURE__ */ new Set(), animations = {};
    const visit = (id) => {
      if (seen.has(id)) return;
      seen.add(id);
      if (resources.animations.has(id)) {
        animations[id] = resources.animations.get(id);
        return;
      }
      const controller2 = resources.controllers.get(id);
      if (!controller2) return;
      for (const state of Object.values(controller2.states ?? {})) for (const entry of state.animations ?? []) {
        for (const alias of typeof entry === "string" ? [entry] : Object.keys(entry)) visit(client.animations?.[alias] ?? alias);
      }
    };
    for (const id of ids) visit(id);
    return animations;
  }

  // src/presets/villager.json
  var villager_default = {
    formatVersion: 1,
    trigger: "q.max_health>0&&q.health<q.max_health",
    release: "q.health>=q.max_health",
    defaults: {
      friction: 0.3,
      restitution: 0,
      linearDamping: 0.01,
      angularDamping: 0.01
    },
    simulation: {
      frequency: 20,
      iterations: 6,
      contactLimit: 128,
      gravity: 9.82,
      poseTransition: 0.4,
      initialVelocity: [
        0.3,
        0.1,
        0.3
      ],
      initialSpin: 1.3
    },
    bodies: {
      body: {
        bone: "body",
        center: [
          0,
          18,
          0
        ],
        mass: 402.43084,
        shapes: [
          {
            type: "box",
            center: [
              0,
              18,
              0
            ],
            size: [
              7.573333333333333,
              11.573333333333332,
              5.572266666666667
            ],
            rotation: [
              0,
              0,
              0
            ]
          }
        ]
      },
      head: {
        bone: "head",
        center: [
          0,
          29.000533333333333,
          0
        ],
        mass: 452.37933999999996,
        shapes: [
          {
            type: "box",
            center: [
              0,
              29.000533333333333,
              0
            ],
            size: [
              7.573333333333333,
              9.572266666666668,
              7.573333333333333
            ],
            rotation: [
              0,
              0,
              0
            ]
          }
        ]
      },
      nose: {
        bone: "nose",
        center: [
          0,
          25.000533333333333,
          -5.000533333333333
        ],
        mass: 7.2982296,
        shapes: [
          {
            type: "box",
            center: [
              0,
              25.000533333333333,
              -5.000533333333333
            ],
            size: [
              1.5744,
              3.5733333333333333,
              1.5744
            ],
            rotation: [
              0,
              0,
              0
            ]
          }
        ]
      },
      arms: {
        bone: "arms",
        center: [
          0,
          18.833066666666664,
          -0.1664
        ],
        mass: 168.5728576,
        shapes: [
          {
            type: "box",
            center: [
              -6,
              20,
              0
            ],
            size: [
              3.5733333333333333,
              7.573333333333333,
              3.5733333333333333
            ],
            rotation: [
              0,
              0,
              0
            ]
          },
          {
            type: "box",
            center: [
              6,
              20,
              0
            ],
            size: [
              3.5733333333333333,
              7.573333333333333,
              3.5733333333333333
            ],
            rotation: [
              0,
              0,
              0
            ]
          },
          {
            type: "box",
            center: [
              0,
              16.500266666666665,
              -0.5002666666666666
            ],
            size: [
              7.573333333333333,
              0.5738666666666667,
              2.5728
            ],
            rotation: [
              0,
              0,
              0
            ]
          }
        ]
      },
      leg_l: {
        bone: "leg0",
        center: [
          -2,
          6,
          0
        ],
        mass: 121.76412499999999,
        shapes: [
          {
            type: "box",
            center: [
              -2,
              6,
              0
            ],
            size: [
              3.5733333333333333,
              11.573333333333332,
              3.5733333333333333
            ],
            rotation: [
              0,
              0,
              0
            ]
          }
        ]
      },
      leg_r: {
        bone: "leg1",
        center: [
          2,
          6,
          0
        ],
        mass: 121.76412499999999,
        shapes: [
          {
            type: "box",
            center: [
              2,
              6,
              0
            ],
            size: [
              3.5733333333333333,
              11.573333333333332,
              3.5733333333333333
            ],
            rotation: [
              0,
              0,
              0
            ]
          }
        ]
      }
    },
    joints: {
      neck: {
        type: "coneTwist",
        a: "body",
        b: "head",
        anchorA: [
          0,
          6,
          0
        ],
        anchorB: [
          0,
          -5.000533333333333,
          0
        ],
        axisA: [
          0,
          1,
          0
        ],
        axisB: [
          0,
          1,
          0
        ],
        twistAxisA: [
          -1,
          0,
          0
        ],
        twistAxisB: [
          -1,
          0,
          0
        ],
        swing: 45,
        twist: 22.5
      },
      nose: {
        type: "coneTwist",
        a: "head",
        b: "nose",
        anchorA: [
          0,
          -2.9994666666666663,
          -4
        ],
        anchorB: [
          0,
          1.0005333333333333,
          1.0005333333333333
        ],
        axisA: [
          0,
          0,
          -1
        ],
        axisB: [
          0,
          0,
          -1
        ],
        twistAxisA: [
          -1,
          0,
          0
        ],
        twistAxisB: [
          -1,
          0,
          0
        ],
        swing: 45,
        twist: 22.5
      },
      arms: {
        type: "coneTwist",
        a: "body",
        b: "arms",
        anchorA: [
          0,
          4,
          0
        ],
        anchorB: [
          0,
          3.166933333333333,
          0.1664
        ],
        axisA: [
          0,
          1,
          0
        ],
        axisB: [
          0,
          1,
          0
        ],
        twistAxisA: [
          -1,
          0,
          0
        ],
        twistAxisB: [
          -1,
          0,
          0
        ],
        swing: 45,
        twist: 22.5,
        transitionAnchorA: [
          0,
          -1,
          -1
        ]
      },
      left_hip: {
        type: "coneTwist",
        a: "body",
        b: "leg_l",
        anchorA: [
          -2,
          -6,
          0
        ],
        anchorB: [
          0,
          6,
          0
        ],
        axisA: [
          0,
          1,
          0
        ],
        axisB: [
          0,
          1,
          0
        ],
        twistAxisA: [
          -1,
          0,
          0
        ],
        twistAxisB: [
          -1,
          0,
          0
        ],
        swing: 45,
        twist: 22.5
      },
      right_hip: {
        type: "coneTwist",
        a: "body",
        b: "leg_r",
        anchorA: [
          2,
          -6,
          0
        ],
        anchorB: [
          0,
          6,
          0
        ],
        axisA: [
          0,
          1,
          0
        ],
        axisB: [
          0,
          1,
          0
        ],
        twistAxisA: [
          -1,
          0,
          0
        ],
        twistAxisB: [
          -1,
          0,
          0
        ],
        swing: 45,
        twist: 22.5
      }
    },
    jointOrder: [
      "neck",
      "arms",
      "left_hip",
      "right_hip",
      "nose"
    ],
    collisionPairs: [
      [
        "body",
        "head"
      ],
      [
        "head",
        "nose"
      ],
      [
        "body",
        "arms"
      ],
      [
        "head",
        "arms"
      ],
      [
        "body",
        "leg_l"
      ],
      [
        "body",
        "leg_r"
      ],
      [
        "leg_l",
        "leg_r"
      ]
    ],
    variants: [
      {
        when: "q.is_baby",
        geometry: "baby",
        scale: 1,
        bodies: {
          body: {
            center: [
              0,
              5.5,
              0
            ],
            mass: 51.071999999999996,
            shapes: [
              {
                type: "box",
                center: [
                  0,
                  5.5,
                  0
                ],
                size: [
                  3.8,
                  4.8,
                  2.8
                ],
                rotation: [
                  0,
                  0,
                  0
                ]
              }
            ]
          },
          head: {
            center: [
              0,
              12,
              0
            ],
            mass: 413.712,
            shapes: [
              {
                type: "box",
                center: [
                  0,
                  12,
                  0
                ],
                size: [
                  7.8,
                  7.8,
                  6.8
                ],
                rotation: [
                  0,
                  0,
                  0
                ]
              }
            ]
          },
          nose: {
            center: [
              0,
              9,
              -4
            ],
            mass: 2.5920000000000005,
            shapes: [
              {
                type: "box",
                center: [
                  0,
                  9,
                  -4
                ],
                size: [
                  1.8,
                  1.8,
                  0.8
                ],
                rotation: [
                  0,
                  0,
                  0
                ]
              }
            ]
          },
          arms: {
            center: [
              0,
              5.807,
              -1.414
            ],
            mass: 28.728,
            shapes: [
              {
                type: "box",
                center: [
                  0,
                  5.278594555433773,
                  -2.3348604327990463
                ],
                size: [
                  3.8,
                  0.6,
                  1.8
                ],
                rotation: [
                  -59.999999999999986,
                  0,
                  0
                ]
              },
              {
                type: "box",
                center: [
                  3,
                  6.071211339178928,
                  -0.9534824886361644
                ],
                size: [
                  1.8,
                  3.8,
                  1.8
                ],
                rotation: [
                  -59.999999999999986,
                  0,
                  0
                ]
              },
              {
                type: "box",
                center: [
                  -3,
                  6.071211339178928,
                  -0.9534824886361644
                ],
                size: [
                  1.8,
                  3.8,
                  1.8
                ],
                rotation: [
                  -59.999999999999986,
                  0,
                  0
                ]
              }
            ]
          },
          leg_l: {
            center: [
              -1,
              1.5,
              0
            ],
            mass: 9.072000000000001,
            shapes: [
              {
                type: "box",
                center: [
                  -1,
                  1.5,
                  0
                ],
                size: [
                  1.8,
                  2.8,
                  1.8
                ],
                rotation: [
                  0,
                  0,
                  0
                ]
              }
            ]
          },
          leg_r: {
            center: [
              1,
              1.5,
              0
            ],
            mass: 9.072000000000001,
            shapes: [
              {
                type: "box",
                center: [
                  1,
                  1.5,
                  0
                ],
                size: [
                  1.8,
                  2.8,
                  1.8
                ],
                rotation: [
                  0,
                  0,
                  0
                ]
              }
            ]
          }
        },
        joints: {
          neck: {
            anchorA: [
              1,
              2.5,
              0
            ],
            anchorB: [
              1,
              -4,
              0
            ]
          },
          nose: {
            anchorA: [
              0,
              -2.5,
              -3.5
            ],
            anchorB: [
              0,
              0.5,
              0.5
            ]
          },
          arms: {
            anchorA: [
              0,
              1,
              0
            ],
            anchorB: [
              0,
              0.693,
              1.414
            ],
            transitionAnchorA: [
              0,
              0,
              0
            ]
          },
          left_hip: {
            anchorA: [
              -1,
              -2.5,
              0
            ],
            anchorB: [
              0,
              1.5,
              0
            ]
          },
          right_hip: {
            anchorA: [
              1,
              -2.5,
              0
            ],
            anchorB: [
              0,
              1.5,
              0
            ]
          }
        }
      },
      {
        geometry: "default",
        scale: 0.9375
      }
    ]
  };

  // src/presets/villager-models.json
  var villager_models_default = {
    "geometry.villager.baby": [
      {
        name: "body",
        pivot: [
          0,
          5.25,
          0
        ],
        rotation: [
          0,
          0,
          0
        ],
        cubes: [
          {
            origin: [
              -2,
              3,
              -1.5
            ],
            size: [
              4,
              5,
              3
            ],
            uv: [
              0,
              15
            ]
          },
          {
            origin: [
              -2,
              2,
              -1.5
            ],
            size: [
              4,
              6,
              3
            ],
            inflate: 0.2,
            uv: [
              16,
              21
            ]
          }
        ]
      },
      {
        name: "head",
        parent: "body",
        pivot: [
          0,
          8,
          0
        ],
        rotation: [
          0,
          0,
          0
        ],
        cubes: [
          {
            origin: [
              -4,
              8,
              -3.5
            ],
            size: [
              8,
              8,
              7
            ],
            uv: [
              0,
              0
            ]
          }
        ]
      },
      {
        name: "helmet",
        parent: "head",
        pivot: [
          0,
          12,
          0
        ],
        rotation: [
          0,
          0,
          0
        ],
        cubes: [
          {
            origin: [
              -4,
              8,
              -3.5
            ],
            size: [
              8,
              8,
              7
            ],
            inflate: 0.3,
            uv: [
              0,
              30
            ]
          }
        ]
      },
      {
        name: "brim",
        parent: "head",
        pivot: [
          0,
          12.5,
          0
        ],
        rotation: [
          0,
          0,
          0
        ],
        cubes: [
          {
            origin: [
              -7,
              12,
              -6
            ],
            size: [
              14,
              1,
              12
            ],
            uv: [
              0,
              45
            ]
          }
        ]
      },
      {
        name: "nose",
        parent: "head",
        pivot: [
          0,
          10,
          -4
        ],
        rotation: [
          0,
          0,
          0
        ],
        cubes: [
          {
            origin: [
              -1,
              8,
              -4.5
            ],
            size: [
              2,
              2,
              1
            ],
            uv: [
              23,
              0
            ]
          }
        ]
      },
      {
        name: "arms",
        parent: "body",
        pivot: [
          0,
          6.5,
          0
        ],
        rotation: [
          0,
          0,
          0
        ],
        cubes: [
          {
            origin: [
              -2,
              4.59,
              -2.8
            ],
            size: [
              4,
              2,
              2
            ],
            pivot: [
              0,
              5.59757,
              -1.81746
            ],
            rotation: [
              -60,
              0,
              0
            ],
            uv: [
              24,
              17
            ]
          },
          {
            origin: [
              2,
              3.59,
              -2.8
            ],
            size: [
              2,
              4,
              2
            ],
            pivot: [
              3,
              5.09754,
              -0.95992
            ],
            rotation: [
              -60,
              0,
              0
            ],
            uv: [
              16,
              15
            ]
          },
          {
            origin: [
              -4,
              3.59,
              -2.8
            ],
            size: [
              2,
              4,
              2
            ],
            pivot: [
              -3,
              5.09754,
              -0.95992
            ],
            rotation: [
              -60,
              0,
              0
            ],
            uv: [
              36,
              15
            ]
          }
        ]
      },
      {
        name: "leg0",
        parent: "body",
        pivot: [
          -1,
          2.5,
          0
        ],
        rotation: [
          0,
          0,
          0
        ],
        cubes: [
          {
            origin: [
              -2,
              0,
              -1
            ],
            size: [
              2,
              3,
              2
            ],
            uv: [
              8,
              23
            ]
          }
        ]
      },
      {
        name: "leg1",
        parent: "body",
        pivot: [
          1,
          2.5,
          0
        ],
        rotation: [
          0,
          0,
          0
        ],
        cubes: [
          {
            origin: [
              0,
              0,
              -1
            ],
            size: [
              2,
              3,
              2
            ],
            uv: [
              0,
              23
            ]
          }
        ]
      }
    ],
    "geometry.villager.v1.8": [
      {
        name: "head",
        parent: "body",
        pivot: [
          0,
          24,
          0
        ],
        rotation: [
          0,
          0,
          0
        ],
        cubes: [
          {
            origin: [
              -4,
              24,
              -4
            ],
            size: [
              8,
              10,
              8
            ],
            uv: [
              0,
              0
            ]
          }
        ]
      },
      {
        name: "nose",
        parent: "head",
        pivot: [
          0,
          26,
          0
        ],
        rotation: [
          0,
          0,
          0
        ],
        cubes: [
          {
            origin: [
              -1,
              23,
              -6
            ],
            size: [
              2,
              4,
              2
            ],
            uv: [
              24,
              0
            ]
          }
        ]
      },
      {
        name: "body",
        pivot: [
          0,
          0,
          0
        ],
        rotation: [
          0,
          0,
          0
        ],
        cubes: [
          {
            origin: [
              -4,
              12,
              -3
            ],
            size: [
              8,
              12,
              6
            ],
            uv: [
              16,
              20
            ]
          },
          {
            origin: [
              -4,
              6,
              -3
            ],
            size: [
              8,
              18,
              6
            ],
            uv: [
              0,
              38
            ],
            inflate: 0.5
          }
        ]
      },
      {
        name: "arms",
        parent: "body",
        pivot: [
          0,
          22,
          0
        ],
        rotation: [
          0,
          0,
          0
        ],
        cubes: [
          {
            origin: [
              -4,
              16,
              -2
            ],
            size: [
              8,
              4,
              4
            ],
            uv: [
              40,
              38
            ]
          },
          {
            origin: [
              -8,
              16,
              -2
            ],
            size: [
              4,
              8,
              4
            ],
            uv: [
              44,
              22
            ]
          },
          {
            origin: [
              4,
              16,
              -2
            ],
            size: [
              4,
              8,
              4
            ],
            uv: [
              44,
              22
            ]
          }
        ]
      },
      {
        name: "leg0",
        parent: "body",
        pivot: [
          -2,
          12,
          0
        ],
        rotation: [
          0,
          0,
          0
        ],
        cubes: [
          {
            origin: [
              -4,
              0,
              -2
            ],
            size: [
              4,
              12,
              4
            ],
            uv: [
              0,
              22
            ]
          }
        ]
      },
      {
        name: "leg1",
        parent: "body",
        pivot: [
          2,
          12,
          0
        ],
        rotation: [
          0,
          0,
          0
        ],
        cubes: [
          {
            origin: [
              0,
              0,
              -2
            ],
            size: [
              4,
              12,
              4
            ],
            uv: [
              0,
              22
            ]
          }
        ]
      }
    ],
    "geometry.villager_v2": [
      {
        name: "head",
        parent: "body",
        pivot: [
          0,
          24,
          0
        ],
        rotation: [
          0,
          0,
          0
        ],
        cubes: [
          {
            origin: [
              -4,
              24,
              -4
            ],
            size: [
              8,
              10,
              8
            ],
            uv: [
              0,
              0
            ]
          }
        ]
      },
      {
        name: "helmet",
        parent: "head",
        pivot: [
          0,
          24,
          0
        ],
        rotation: [
          0,
          0,
          0
        ],
        cubes: [
          {
            origin: [
              -4,
              24,
              -4
            ],
            size: [
              8,
              10,
              8
            ],
            uv: [
              32,
              0
            ],
            inflate: 0.5
          }
        ]
      },
      {
        name: "brim",
        parent: "head",
        pivot: [
          0,
          24,
          0
        ],
        rotation: [
          0,
          0,
          0
        ],
        cubes: [
          {
            origin: [
              -8,
              16,
              -6
            ],
            size: [
              16,
              16,
              1
            ],
            uv: [
              30,
              47
            ],
            inflate: 0.1
          }
        ]
      },
      {
        name: "nose",
        parent: "head",
        pivot: [
          0,
          26,
          0
        ],
        rotation: [
          0,
          0,
          0
        ],
        cubes: [
          {
            origin: [
              -1,
              23,
              -6
            ],
            size: [
              2,
              4,
              2
            ],
            uv: [
              24,
              0
            ]
          }
        ]
      },
      {
        name: "body",
        pivot: [
          0,
          0,
          0
        ],
        rotation: [
          0,
          0,
          0
        ],
        cubes: [
          {
            origin: [
              -4,
              12,
              -3
            ],
            size: [
              8,
              12,
              6
            ],
            uv: [
              16,
              20
            ]
          },
          {
            origin: [
              -4,
              6,
              -3
            ],
            size: [
              8,
              18,
              6
            ],
            uv: [
              0,
              38
            ],
            inflate: 0.5
          }
        ]
      },
      {
        name: "arms",
        parent: "body",
        pivot: [
          0,
          22,
          0
        ],
        rotation: [
          0,
          0,
          0
        ],
        cubes: [
          {
            origin: [
              -4,
              16,
              -2
            ],
            size: [
              8,
              4,
              4
            ],
            uv: [
              40,
              38
            ]
          },
          {
            origin: [
              -8,
              16,
              -2
            ],
            size: [
              4,
              8,
              4
            ],
            uv: [
              44,
              22
            ]
          },
          {
            origin: [
              4,
              16,
              -2
            ],
            size: [
              4,
              8,
              4
            ],
            uv: [
              44,
              22
            ],
            mirror: true
          }
        ]
      },
      {
        name: "held_item",
        parent: "arms",
        pivot: [
          0,
          0,
          0
        ],
        rotation: [
          0,
          0,
          0
        ],
        cubes: []
      },
      {
        name: "leg0",
        parent: "body",
        pivot: [
          -2,
          12,
          0
        ],
        rotation: [
          0,
          0,
          0
        ],
        cubes: [
          {
            origin: [
              -4,
              0,
              -2
            ],
            size: [
              4,
              12,
              4
            ],
            uv: [
              0,
              22
            ]
          }
        ]
      },
      {
        name: "leg1",
        parent: "body",
        pivot: [
          2,
          12,
          0
        ],
        rotation: [
          0,
          0,
          0
        ],
        cubes: [
          {
            origin: [
              0,
              0,
              -2
            ],
            size: [
              4,
              12,
              4
            ],
            uv: [
              0,
              22
            ],
            mirror: true
          }
        ]
      }
    ]
  };

  // src/core/expression.mjs
  var axes = ["x", "y", "z"];
  var quat = [...axes, "w"];
  var A = (name, value) => ({ kind: "set", name, value });
  var If = (test, yes, no = []) => ({ kind: "if", test, yes: [yes].flat(Infinity), no: [no].flat(Infinity) });
  var Loop = (count, body) => ({ kind: "loop", count, body: body.flat(Infinity) });
  var set = (prefix, values) => Object.entries(values).map(([key2, value]) => A(prefix + key2, value));
  var dot = (a, b, keys2 = axes) => keys2.map((k) => `${a}${k}*${b}${k}`).join("+");
  var copy = (out, src, keys2 = axes) => keys2.map((k) => A(out + k, src + k));
  var add = (out, a, b) => axes.map((k) => A(out + k, `${a}${k}+${b}${k}`));
  var sub = (out, a, b) => axes.map((k) => A(out + k, `${a}${k}-${b}${k}`));
  var scale = (out, src, factor, keys2 = axes) => keys2.map((k) => A(out + k, `${src}${k}*(${factor})`));
  var cross = (out, a, b) => axes.map((k, i) => A(out + k, `${a}${axes[(i + 1) % 3]}*${b}${axes[(i + 2) % 3]}-${a}${axes[(i + 2) % 3]}*${b}${axes[(i + 1) % 3]}`));
  var vector = (out, values, factor = "1") => axes.map((k, i) => A(out + k, `(${values[i]})*(${factor})`));
  function normalize(prefix, keys2 = axes) {
    return [A("t.norm", `math.max(math.sqrt(${dot(prefix, prefix, keys2)}),0.000001)`), scale(prefix, prefix, "1/t.norm", keys2)];
  }
  function emitNodes(nodes, target = "molang", depth = 0) {
    return nodes.flat(Infinity).map((n) => {
      if (n.kind === "set") return `${n.name}=${n.value};`;
      if (n.kind === "if") return target === "molang" ? `(${n.test})?{${emitNodes(n.yes, target, depth)}}${n.no.length ? `:{${emitNodes(n.no, target, depth)}}` : ""};` : `if(${n.test}){${emitNodes(n.yes, target, depth)}}${n.no.length ? `else{${emitNodes(n.no, target, depth)}}` : ""}`;
      return target === "molang" ? `loop(${n.count},{${emitNodes(n.body, target, depth + 1)}});` : `for(let i${depth}=0,n${depth}=${n.count};i${depth}<n${depth};i${depth}++){${emitNodes(n.body, target, depth + 1)}}`;
    }).join("");
  }
  function emit(nodes, target = "molang") {
    const source2 = emitNodes(nodes, target), names = /* @__PURE__ */ new Map();
    const identifier = (index) => (index >= 26 ? identifier(Math.floor(index / 26) - 1) : "") + String.fromCharCode(97 + index % 26);
    return source2.replace(/'[^']*'|(?<![\w.])t\.\w+/g, (name) => {
      if (name.startsWith("'")) return name;
      if (!names.has(name)) names.set(name, `t.${identifier(names.size)}`);
      return names.get(name);
    });
  }
  function choose(index, values, start = 0) {
    if (Number.isInteger(Number(index))) return String(values[Number(index) - start]);
    if (values.every((value) => value === values[0])) return String(values[0]);
    const half = Math.floor(values.length / 2);
    return `(${index}<${start + half}?${choose(index, values.slice(0, half), start)}:${choose(index, values.slice(half), start + half)})`;
  }
  function dispatch(index, values, action, start = 0) {
    if (Number.isInteger(Number(index))) return action(values[Number(index) - start], Number(index));
    if (values.length === 1) return action(values[0], start);
    const half = Math.floor(values.length / 2);
    return [If(`${index}<${start + half}`, dispatch(index, values.slice(0, half), action, start), dispatch(index, values.slice(half), action, start + half))];
  }
  function multiply(out, a, b) {
    return [
      A("t.mx", `${a}w*${b}x+${a}x*${b}w+${a}y*${b}z-${a}z*${b}y`),
      A("t.my", `${a}w*${b}y-${a}x*${b}z+${a}y*${b}w+${a}z*${b}x`),
      A("t.mz", `${a}w*${b}z+${a}x*${b}y-${a}y*${b}x+${a}z*${b}w`),
      A("t.mw", `${a}w*${b}w-${a}x*${b}x-${a}y*${b}y-${a}z*${b}z`),
      copy(out, "t.m", quat)
    ];
  }
  function rotate(out, q, p) {
    return [
      cross("t.rc", q, p),
      scale("t.rc", "t.rc", 2),
      cross("t.rd", q, "t.rc"),
      axes.map((k) => A(out + k, `${p}${k}+${q}w*t.rc${k}+t.rd${k}`))
    ];
  }
  function axisRotation(out, axis2, angle2) {
    return [vector(out, axes.map((k) => k === axis2 ? `math.sin((${angle2})*0.5)` : 0)), A(out + "w", `math.cos((${angle2})*0.5)`)];
  }

  // src/core/math.mjs
  var add2 = (a, b) => a.map((n, i) => n + b[i]);
  var sub2 = (a, b) => a.map((n, i) => n - b[i]);
  var scale2 = (a, s) => a.map((n) => n * s);
  var dot2 = (a, b) => a.reduce((s, n, i) => s + n * b[i], 0);
  var cross2 = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  var conjugate = (q) => [-q[0], -q[1], -q[2], q[3]];
  var multiply2 = (a, b) => [...add2(add2(scale2(b.slice(0, 3), a[3]), scale2(a.slice(0, 3), b[3])), cross2(a, b)), a[3] * b[3] - dot2(a.slice(0, 3), b.slice(0, 3))];
  var rotate2 = (q, p) => add2(p, add2(scale2(cross2(q, p), q[3] * 2), scale2(cross2(q, cross2(q, p)), 2)));
  var axis = (i, angle2) => [...[0, 1, 2].map((k) => i === k ? Math.sin(angle2 * Math.PI / 360) : 0), Math.cos(angle2 * Math.PI / 360)];
  var modelRotation = ([x, y, z]) => multiply2(axis(2, -z), multiply2(axis(1, y), axis(0, -x)));
  var reflect = (p) => [p[0], p[1], -p[2]];
  var reflectRotation = (q) => [-q[0], -q[1], q[2], q[3]];
  var identity = () => ({ q: [0, 0, 0, 1], t: [0, 0, 0] });
  var compose = (a, b) => ({ q: multiply2(a.q, b.q), t: add2(a.t, rotate2(a.q, b.t)) });
  function boneTransform(bone) {
    const pivot = bone.pivot ?? [0, 0, 0], q = modelRotation(bone.rotation ?? [0, 0, 0]);
    return { q, t: sub2(pivot, rotate2(q, pivot)) };
  }

  // src/core/model.mjs
  var number = (v, label, min = -Infinity, max = Infinity) => typeof v === "number" && Number.isFinite(v) && v >= min && v <= max ? v : fail("number", [label, min, max]);
  var vec = (v, label) => Array.isArray(v) && v.length === 3 ? v.map((n, i) => number(n, `${label}[${i}]`)) : fail("vector", [label]);
  var keys = (o, allowed, label) => {
    for (const k of Object.keys(o)) if (!allowed.includes(k)) fail("field", [label, k]);
  };
  var expression = (s, label) => typeof s === "string" && s.trim() && !/[;{}]/.test(s) ? s : fail("molang", [label]);
  var select = (values) => values.every((v) => v === values[0]) ? values[0] : choose("v.variant", values);
  var OUTPUT_LEVELS = ["heavy", "medium", "light", "standard"];
  var normalizeAxis = (v, label) => {
    const p = vec(v, label), n = Math.hypot(...p);
    if (n < 1e-9) fail("zero_axis", [label]);
    return p.map((x) => x / n);
  };
  function settings(input = {}) {
    keys(input, ["frequency", "iterations", "contactLimit", "gravity", "poseTransition", "sleep", "terrain", "initialVelocity", "initialSpin"], "simulation");
    const result = {
      frequency: 20,
      iterations: 6,
      contactLimit: 128,
      gravity: 9.82,
      poseTransition: 0.4,
      initialVelocity: [0.3, 0.1, 0.3],
      initialSpin: 0,
      sleep: { speed: 0.3125, seconds: 0.5, checkInterval: 0.5 },
      terrain: { includeTags: ["minecraft:is_axe_item_destructible", "minecraft:is_hoe_item_destructible", "minecraft:is_pickaxe_item_destructible", "minecraft:is_shovel_item_destructible", "not_feature_replaceable"], excludeTags: ["water", "lava"], friction: 0.3, restitution: 0 },
      ...input
    };
    result.sleep = { speed: 0.3125, seconds: 0.5, checkInterval: 0.5, ...input.sleep };
    result.terrain = { includeTags: ["minecraft:is_axe_item_destructible", "minecraft:is_hoe_item_destructible", "minecraft:is_pickaxe_item_destructible", "minecraft:is_shovel_item_destructible", "not_feature_replaceable"], excludeTags: ["water", "lava"], friction: 0.3, restitution: 0, ...input.terrain };
    keys(result.sleep, ["speed", "seconds", "checkInterval"], "sleep");
    keys(result.terrain, ["includeTags", "excludeTags", "friction", "restitution"], "terrain");
    for (const [k, min, max] of [["frequency", 5, 60], ["iterations", 1, 12], ["contactLimit", 8, 256], ["gravity", 0, 100], ["poseTransition", 1e-3, 10], ["initialSpin", 0, 100]]) number(result[k], k, min, max);
    for (const k of ["iterations", "contactLimit"]) if (!Number.isInteger(result[k])) fail("integer", [k]);
    vec(result.initialVelocity, "initialVelocity");
    for (const k of ["speed", "seconds", "checkInterval"]) number(result.sleep[k], `sleep.${k}`, 1e-3, 100);
    for (const key2 of ["includeTags", "excludeTags"]) {
      if (!Array.isArray(result.terrain[key2]) || result.terrain[key2].some((t2) => typeof t2 !== "string" || !/^[\w:.-]+$/.test(t2))) fail("tags", [key2]);
    }
    if (!result.terrain.includeTags.length) fail("include_tags");
    number(result.terrain.friction, "terrain.friction", 0, 10);
    number(result.terrain.restitution, "terrain.restitution", 0, 1);
    return result;
  }
  function normalizeModel(config, resources, client) {
    keys(config, ["$schema", "formatVersion", "trigger", "release", "defaults", "simulation", "bodies", "joints", "collisionPairs", "jointOrder", "variants", "outputLevel", "outputs"], "physics");
    if (config.outputs !== void 0 && (!Array.isArray(config.outputs) || config.outputs.some((key2) => !["state", "bodies", "contacts", "liquids"].includes(key2)))) fail("unexpected", [config.outputs]);
    if (config.formatVersion !== 1) fail("format");
    if (!OUTPUT_LEVELS.includes(config.outputLevel ?? "standard")) fail("unexpected", [config.outputLevel]);
    const sim = settings(config.simulation), bodyIds = Object.keys(config.bodies ?? {});
    if (!bodyIds.length || bodyIds.length > 32) fail("body_count");
    if (bodyIds.some((id) => !/^[a-zA-Z_]\w*$/.test(id))) fail("body_id");
    const defaults = { friction: 0.3, restitution: 0, linearDamping: 0.01, angularDamping: 0.01, density: 1, ...config.defaults };
    keys(defaults, ["friction", "restitution", "linearDamping", "angularDamping", "density"], "defaults");
    const variants = config.variants ?? [{ geometry: "default", scale: 1 }];
    if (!variants.length || variants.filter((v) => v.when === void 0).length !== 1 || variants.at(-1).when !== void 0) fail("variants");
    const bones = bodyIds.map((id) => config.bodies[id].bone), bodyByBone = /* @__PURE__ */ new Map();
    for (const [i, bone] of bones.entries()) {
      if (typeof bone !== "string" || !bone || bone.includes("'")) fail("bone_name", [bodyIds[i]]);
      if (bodyByBone.has(bone)) fail("duplicate_bone", [bone]);
      bodyByBone.set(bone, i);
    }
    const normalized = variants.map((variant, vi) => {
      keys(variant, ["when", "geometry", "scale", "bodies", "joints"], `variants[${vi}]`);
      if (variant.when !== void 0) expression(variant.when, "variant.when");
      const geometryId = client.geometry?.[variant.geometry] ?? variant.geometry, geometry = resources.geometries.get(geometryId);
      if (!geometry) fail("geometry", [geometryId]);
      if (!Object.values(client.geometry ?? {}).includes(geometryId)) fail("geometry_reference", [geometryId]);
      const visualScale = number(variant.scale ?? 1, "variant.scale", 1e-3, 100);
      const boneMap = new Map(geometry.bones.map((b) => [b.name, b]));
      if (boneMap.size !== geometry.bones.length) fail("duplicate_geometry_bone", [geometryId]);
      const visit = (name, trail = []) => {
        if (trail.includes(name)) fail("bone_cycle", [name]);
        const b = boneMap.get(name);
        if (!b) fail("bone_missing", [name]);
        if (b.parent) visit(b.parent, [...trail, name]);
      };
      for (const name of boneMap.keys()) visit(name);
      for (const key2 of Object.keys(variant.bodies ?? {})) if (!bodyIds.includes(key2)) fail("variant_body", [key2]);
      const bodies2 = bodyIds.map((id, i) => {
        const input = { ...config.bodies[id], ...variant.bodies?.[id] }, bone = boneMap.get(bones[i]);
        if (!bone) fail("bone_in_geometry", [geometryId, bones[i]]);
        keys(input, ["bone", "center", "mass", "density", "friction", "restitution", "linearDamping", "angularDamping", "shapes"], id);
        if (input.bone !== bones[i]) fail("variant_binding", [id]);
        const material = { ...defaults, ...input };
        for (const k of ["friction", "density"]) number(material[k], `${id}.${k}`, k === "density" ? 1e-6 : 0, 1e9);
        for (const k of ["restitution", "linearDamping", "angularDamping"]) number(material[k], `${id}.${k}`, 0, k === "restitution" ? 1 : 0.999999);
        const rawShapes = input.shapes ?? (bone.cubes ?? []).filter((c) => c.size.every((n) => n + 2 * (c.inflate ?? 0) > 0)).map((c) => ({ type: "box", center: add2(c.origin, scale2(c.size, 0.5)), size: c.size.map((n) => n + 2 * (c.inflate ?? 0)), rotation: c.rotation, pivot: c.pivot }));
        if (!rawShapes.length) fail("empty_shapes", [id]);
        const boxes = rawShapes.map((s, j) => {
          keys(s, ["type", "center", "size", "rotation", "pivot"], `${id}.shapes[${j}]`);
          if (s.type !== "box") fail("shape_type", [s.type]);
          const center2 = vec(s.center, `${id}.shape.center`), size = vec(s.size, `${id}.shape.size`), rotation = vec(s.rotation ?? [0, 0, 0], `${id}.shape.rotation`);
          if (size.some((n) => n <= 0)) fail("shape_size", [id]);
          const q = modelRotation(rotation), pivot = s.pivot ? vec(s.pivot, `${id}.shape.pivot`) : center2;
          return { center: add2(pivot, rotate2(q, sub2(center2, pivot))), size, q, volume: size.reduce((a, b) => a * b, 1) };
        });
        const volume = boxes.reduce((n, b) => n + b.volume, 0), center = input.center ? vec(input.center, `${id}.center`) : [0, 1, 2].map((k) => boxes.reduce((n, b) => n + b.center[k] * b.volume, 0) / volume);
        const mass = number(input.mass ?? material.density * volume * (visualScale / 16) ** 3, `${id}.mass`, 1e-12, 1e12);
        const shapes2 = boxes.map((s) => ({ center: scale2(reflect(sub2(s.center, center)), visualScale), half: scale2(s.size, visualScale / 2), quaternion: reflectRotation(s.q) }));
        const extents = shapes2.map((s) => [0, 1, 2].map((k) => [0, 1, 2].reduce((n, a) => n + Math.abs(rotate2(s.quaternion, [0, 1, 2].map((x) => x === a ? 1 : 0))[k]) * s.half[a], 0)));
        const half = [0, 1, 2].map((k) => (Math.max(...shapes2.map((s, j) => s.center[k] + extents[j][k])) - Math.min(...shapes2.map((s, j) => s.center[k] - extents[j][k]))) / 2);
        let parent = bone.parent, parentTransform = identity(), chain = [];
        while (parent && !bodyByBone.has(parent)) {
          chain.unshift(boneMap.get(parent));
          parent = boneMap.get(parent).parent;
        }
        for (const b of chain) parentTransform = compose(parentTransform, boneTransform(b));
        return {
          id,
          name: id,
          bone: bones[i],
          modelCenter: center,
          pivot: bone.pivot ?? [0, 0, 0],
          bindRotation: bone.rotation ?? [0, 0, 0],
          parent: parent ? bodyByBone.get(parent) : -1,
          parentTransform,
          mass,
          inverseMass: 1 / mass,
          inverseInertia: half.map((_, k) => 3 / (mass * (half[(k + 1) % 3] ** 2 + half[(k + 2) % 3] ** 2))),
          shapes: shapes2,
          ...Object.fromEntries(["friction", "restitution", "linearDamping", "angularDamping"].map((k) => [k, material[k]]))
        };
      });
      const joints2 = Object.entries(config.joints ?? {}).map(([id, base]) => {
        const j = { ...base, ...variant.joints?.[id] };
        keys(j, ["type", "a", "b", "anchorA", "anchorB", "axisA", "axisB", "twistAxisA", "twistAxisB", "swing", "twist", "transitionAnchorA", "transitionAnchorB"], `joint.${id}`);
        if (j.type !== "coneTwist") fail("joint_type", [j.type]);
        const a = bodyIds.indexOf(j.a), b = bodyIds.indexOf(j.b);
        if (a < 0 || b < 0 || a === b) fail("joint_body", [id]);
        const anchor = (side, index) => scale2(reflect(j["anchor" + side] ? vec(j["anchor" + side], id) : sub2(bodies2[b].pivot, bodies2[index].modelCenter)), visualScale / 16);
        const axisA = reflect(normalizeAxis(j.axisA ?? [0, 1, 0], id)), axisB = reflect(normalizeAxis(j.axisB ?? j.axisA ?? [0, 1, 0], id));
        const twistAxisA = reflect(normalizeAxis(j.twistAxisA ?? [-1, 0, 0], id)), twistAxisB = reflect(normalizeAxis(j.twistAxisB ?? j.twistAxisA ?? [-1, 0, 0], id));
        return {
          id,
          a,
          b,
          anchorA: anchor("A", a),
          anchorB: anchor("B", b),
          axisA,
          axisB,
          twistAxisA,
          twistAxisB,
          transitionAnchorA: scale2(reflect(vec(j.transitionAnchorA ?? [0, 0, 0], id)), visualScale / 16),
          transitionAnchorB: scale2(reflect(vec(j.transitionAnchorB ?? [0, 0, 0], id)), visualScale / 16),
          swing: number(j.swing ?? 45, id, 0, 180),
          twist: number(j.twist ?? 22.5, id, 0, 180)
        };
      });
      for (const key2 of Object.keys(variant.joints ?? {})) if (!joints2.some((j) => j.id === key2)) fail("variant_joint", [key2]);
      return { geometry: geometryId, when: variant.when, scale: visualScale, bodies: bodies2, joints: joints2 };
    });
    for (const v of normalized.slice(1)) for (let i = 0; i < bodyIds.length; i++) if (v.bodies[i].shapes.length !== normalized[0].bodies[i].shapes.length || v.bodies[i].parent !== normalized[0].bodies[i].parent) fail("topology");
    const merge = (values) => {
      if (Array.isArray(values[0])) return values[0].map((_, i) => merge(values.map((v) => v[i])));
      if (values[0] && typeof values[0] === "object") return Object.fromEntries(Object.keys(values[0]).map((k) => [k, merge(values.map((v) => v[k]))]));
      return select(values);
    };
    const bodies = merge(normalized.map((v) => v.bodies)), joints = merge(normalized.map((v) => v.joints));
    const shapes = bodies.flatMap((b, body) => b.shapes.map((s, part) => ({ ...s, body, part })));
    const collisionPairs = (config.collisionPairs ?? []).map((p) => {
      if (!Array.isArray(p) || p.length !== 2) fail("pairs");
      const pair = p.map((id) => bodyIds.indexOf(id));
      if (pair.some((i) => i < 0) || pair[0] === pair[1]) fail("pair_reference", [p]);
      return pair;
    });
    if (new Set(collisionPairs.map((p) => p.slice().sort().join(","))).size !== collisionPairs.length) fail("pair_duplicate");
    const shapePairs = collisionPairs.flatMap(([a, b]) => shapes.flatMap((s, i) => s.body === a ? shapes.flatMap((t2, j) => t2.body === b ? [[i, j]] : []) : []));
    const jointOrder = (config.jointOrder ?? joints.map((j) => j.id)).map((id) => joints.findIndex((j) => j.id === id));
    if (jointOrder.some((i) => i < 0) || new Set(jointOrder).size !== joints.length || jointOrder.length !== joints.length) fail("joint_order");
    return {
      bodies,
      joints,
      shapes,
      shapePairs,
      jointOrder,
      variants: normalized,
      scale: select(normalized.map((v) => v.scale)),
      simulation: sim,
      outputs: config.outputs ?? [],
      trigger: expression(config.trigger ?? "q.max_health>0&&q.health<q.max_health", "trigger"),
      release: expression(config.release ?? "q.health>=q.max_health", "release")
    };
  }

  // src/rig.js
  var SHARED_BODY = ["bone", "density", "friction", "restitution", "linearDamping", "angularDamping"];
  var SHARED_JOINT = ["type", "a", "b", "swing", "twist"];
  var AXES = ["axisA", "axisB", "twistAxisA", "twistAxisB"];
  var DEFAULT_AXIS = [0, 1, 0];
  var DEFAULT_TWIST = [-1, 0, 0];
  var copy2 = (value) => JSON.parse(JSON.stringify(value));
  var fine = (v) => v.map((n) => Math.abs(n) < 1e-10 ? 0 : Number(n.toFixed(10)));
  var unit = (v) => {
    const n = Math.hypot(...v);
    return n < 1e-9 ? null : v.map((x) => x / n);
  };
  var angle = (u, v) => {
    const a = unit(u), b = unit(v);
    return a && b ? Math.acos(Math.max(-1, Math.min(1, dot2(a, b)))) * 180 / Math.PI : 0;
  };
  var effective = (config, v, kind, id) => ({ ...config[kind][id], ...config.variants[v][kind]?.[id] });
  function setShared(config, kind, id, key2, value) {
    config[kind][id][key2] = value;
    for (const variant of config.variants) delete variant[kind]?.[id]?.[key2];
  }
  function setLocal(config, v, kind, id, key2, value) {
    const variant = config.variants[v];
    ((variant[kind] ??= {})[id] ??= {})[key2] = value;
  }
  function clearLocal(config, v, kind, id, key2) {
    const base = config[kind][id];
    if (key2 in base) config.variants.forEach((variant, i) => {
      if (i !== v && !(key2 in (variant[kind]?.[id] ?? {}))) setLocal(config, i, kind, id, key2, copy2(base[key2]));
    });
    delete base[key2];
    delete config.variants[v][kind]?.[id]?.[key2];
  }
  function clearAll(config, kind, id, keys2) {
    for (const key2 of keys2) {
      delete config[kind][id][key2];
      for (const variant of config.variants) delete variant[kind]?.[id]?.[key2];
    }
  }
  function prune(config) {
    for (const variant of config.variants) for (const kind of ["bodies", "joints"]) {
      if (!variant[kind]) continue;
      for (const id of Object.keys(variant[kind])) if (!config[kind]?.[id] || !Object.keys(variant[kind][id]).length) delete variant[kind][id];
      if (!Object.keys(variant[kind]).length) delete variant[kind];
    }
    config.collisionPairs = (config.collisionPairs ?? []).filter((pair) => pair.every((id) => config.bodies[id]));
    if (config.jointOrder) config.jointOrder = [...config.jointOrder.filter((id) => config.joints[id]), ...Object.keys(config.joints).filter((id) => !config.jointOrder.includes(id))];
    return config;
  }
  function boneFrames(geometry) {
    const bones = new Map(geometry.bones.map((b) => [b.name, b])), frames = /* @__PURE__ */ new Map();
    const get = (name, trail = /* @__PURE__ */ new Set()) => {
      if (frames.has(name)) return frames.get(name);
      const bone = bones.get(name);
      if (!bone) fail("bone_missing", [name]);
      if (trail.has(name)) fail("bone_cycle", [name]);
      trail.add(name);
      const frame = compose(bone.parent ? get(bone.parent, trail) : identity(), boneTransform(bone));
      frames.set(name, frame);
      return frame;
    };
    for (const name of bones.keys()) get(name);
    return frames;
  }
  var toWorld = (frame, p) => add2(frame.t, rotate2(frame.q, p));
  var toLocal = (frame, p) => rotate2(conjugate(frame.q), sub2(p, frame.t));
  var defaultShapes = (bone) => (bone?.cubes ?? []).filter((c) => c.size.every((n) => n + 2 * (c.inflate ?? 0) > 0)).map((c) => ({ type: "box", center: add2(c.origin, scale2(c.size, 0.5)), size: c.size.map((n) => n + 2 * (c.inflate ?? 0)), rotation: c.rotation ?? [0, 0, 0], ...c.pivot ? { pivot: c.pivot } : {} }));
  var shapePosition = (box) => box.pivot ? add2(box.pivot, rotate2(modelRotation(box.rotation ?? [0, 0, 0]), sub2(box.center, box.pivot))) : [...box.center];
  function inspect(config, { resources, client }) {
    const rig = normalizeModel(config, resources, client);
    return rig.variants.map((variant, v) => {
      const geometry = resources.geometries.get(variant.geometry), frames = boneFrames(geometry), bones = new Map(geometry.bones.map((b) => [b.name, b]));
      const bodies = Object.fromEntries(variant.bodies.map((body) => {
        const raw = effective(config, v, "bodies", body.id);
        return [body.id, {
          id: body.id,
          bone: body.bone,
          center: body.modelCenter,
          pivot: body.pivot,
          frame: frames.get(body.bone),
          mass: body.mass,
          shapes: raw.shapes ? copy2(raw.shapes) : defaultShapes(bones.get(body.bone)),
          explicitMass: raw.mass !== void 0,
          explicitCenter: raw.center !== void 0,
          density: raw.density ?? config.defaults?.density ?? 1,
          friction: body.friction,
          restitution: body.restitution,
          linearDamping: body.linearDamping,
          angularDamping: body.angularDamping
        }];
      }));
      return { geometry, frames, bones, scale: variant.scale, bodies };
    });
  }
  function jointEnds(config, info, v, id) {
    const j = effective(config, v, "joints", id), a = info.bodies[j.a], b = info.bodies[j.b];
    if (!a || !b) return null;
    const end = (body, side, axis2, twist) => {
      const local = add2(body.center, j["anchor" + side] ?? sub2(b.pivot, body.center));
      return { body, local, world: toWorld(body.frame, local), axis: axis2, twist, worldAxis: rotate2(body.frame.q, axis2), worldTwist: rotate2(body.frame.q, twist) };
    };
    return { joint: j, a: end(a, "A", j.axisA ?? DEFAULT_AXIS, j.twistAxisA ?? DEFAULT_TWIST), b: end(b, "B", j.axisB ?? j.axisA ?? DEFAULT_AXIS, j.twistAxisB ?? j.twistAxisA ?? DEFAULT_TWIST) };
  }
  function matrixQuaternion([x, y, z]) {
    const [m00, m10, m20] = x, [m01, m11, m21] = y, [m02, m12, m22] = z, trace = m00 + m11 + m22;
    let q;
    if (trace > 0) {
      const s = 0.5 / Math.sqrt(trace + 1);
      q = [(m21 - m12) * s, (m02 - m20) * s, (m10 - m01) * s, 0.25 / s];
    } else if (m00 > m11 && m00 > m22) {
      const s = 2 * Math.sqrt(1 + m00 - m11 - m22);
      q = [0.25 * s, (m01 + m10) / s, (m02 + m20) / s, (m21 - m12) / s];
    } else if (m11 > m22) {
      const s = 2 * Math.sqrt(1 + m11 - m00 - m22);
      q = [(m01 + m10) / s, 0.25 * s, (m12 + m21) / s, (m02 - m20) / s];
    } else {
      const s = 2 * Math.sqrt(1 + m22 - m00 - m11);
      q = [(m02 + m20) / s, (m12 + m21) / s, 0.25 * s, (m10 - m01) / s];
    }
    return unit(q);
  }
  function frameQuaternion(axis2, twist) {
    const y = unit(axis2) ?? DEFAULT_AXIS;
    const x = unit(sub2(scale2(y, dot2(twist, y)), twist)) ?? unit(cross2(y, Math.abs(y[2]) < 0.9 ? [0, 0, 1] : [1, 0, 0]));
    return matrixQuaternion([x, y, cross2(x, y)]);
  }
  function quaternionEuler([x, y, z, w]) {
    const m20 = 2 * (x * z - y * w), b = Math.asin(Math.max(-1, Math.min(1, -m20)));
    let a, c;
    if (Math.abs(m20) < 0.9999999) {
      a = Math.atan2(2 * (y * z + x * w), 1 - 2 * (x * x + y * y));
      c = Math.atan2(2 * (x * y + z * w), 1 - 2 * (y * y + z * z));
    } else {
      a = 0;
      c = Math.atan2(-2 * (x * y - z * w), 1 - 2 * (x * x + z * z));
    }
    return fine([-a, b, -c].map((n) => n * 180 / Math.PI));
  }
  var displayVector = (p) => [-p[0], p[1], p[2]];
  var displayRotation = (r) => [-r[0], -r[1], r[2]];
  function jointFrame(config, info, v, id) {
    const ends = jointEnds(config, info, v, id);
    if (!ends) return null;
    const { a, b } = ends, quaternion2 = frameQuaternion(b.axis, b.twist);
    const mismatch = Math.hypot(...sub2(a.world, b.world)) > 1e-3 || angle(a.worldAxis, b.worldAxis) > 0.5 || angle(a.worldTwist, b.worldTwist) > 0.5;
    return { ends, bone: b.body.bone, position: b.local, quaternion: quaternion2, rotation: quaternionEuler(quaternion2), mismatch };
  }
  function setJointPosition(config, infos, v, id, position) {
    const { a, b } = jointEnds(config, infos[v], v, id), offset = sub2(a.world, b.world), world = toWorld(b.body.frame, position);
    setLocal(config, v, "joints", id, "anchorB", fine(sub2(position, b.body.center)));
    setLocal(config, v, "joints", id, "anchorA", fine(sub2(toLocal(a.body.frame, Math.hypot(...offset) < 1e-6 ? world : add2(world, offset)), a.body.center)));
  }
  function setJointRotation(config, infos, v, id, target) {
    const current = jointEnds(config, infos[v], v, id), delta = multiply2(target, conjugate(frameQuaternion(current.b.axis, current.b.twist)));
    infos.forEach((info, i) => {
      const ends = jointEnds(config, info, i, id);
      if (!ends) return;
      const { a, b } = ends, world = multiply2(multiply2(b.body.frame.q, delta), conjugate(b.body.frame.q)), inA = multiply2(multiply2(conjugate(a.body.frame.q), world), a.body.frame.q), offset = sub2(a.world, b.world);
      setLocal(config, i, "joints", id, "axisB", fine(rotate2(delta, b.axis)));
      setLocal(config, i, "joints", id, "twistAxisB", fine(rotate2(delta, b.twist)));
      setLocal(config, i, "joints", id, "axisA", fine(rotate2(inA, a.axis)));
      setLocal(config, i, "joints", id, "twistAxisA", fine(rotate2(inA, a.twist)));
      if (Math.hypot(...offset) > 1e-6) setLocal(config, i, "joints", id, "anchorA", fine(sub2(toLocal(a.body.frame, add2(b.world, rotate2(world, offset))), a.body.center)));
    });
  }
  var resetJointRotation = (config, id) => clearAll(config, "joints", id, AXES);
  function resetJointPosition(config, v, id) {
    clearLocal(config, v, "joints", id, "anchorA");
    clearLocal(config, v, "joints", id, "anchorB");
  }
  function alignJoint(config, infos, id, only) {
    infos.forEach((info, i) => {
      if (only !== void 0 && i !== only) return;
      const frame = jointFrame(config, info, i, id);
      if (!frame?.mismatch) return;
      const { a, b } = frame.ends, inverse2 = conjugate(a.body.frame.q);
      setLocal(config, i, "joints", id, "anchorA", fine(sub2(toLocal(a.body.frame, b.world), a.body.center)));
      setLocal(config, i, "joints", id, "axisA", fine(rotate2(inverse2, b.worldAxis)));
      setLocal(config, i, "joints", id, "twistAxisA", fine(rotate2(inverse2, b.worldTwist)));
      setLocal(config, i, "joints", id, "axisB", fine(b.axis));
      setLocal(config, i, "joints", id, "twistAxisB", fine(b.twist));
    });
  }
  function keepAnchors(config, before, after) {
    after.forEach((info, i) => {
      const old = before[i];
      if (!old) return;
      for (const id of Object.keys(config.joints ?? {})) {
        const j = effective(config, i, "joints", id);
        for (const side of ["A", "B"]) {
          const body = j[side.toLowerCase()], anchor = j["anchor" + side];
          if (!anchor || !old.bodies[body] || !info.bodies[body]) continue;
          const delta = sub2(info.bodies[body].center, old.bodies[body].center);
          if (Math.hypot(...delta) > 1e-9) setLocal(config, i, "joints", id, "anchor" + side, fine(sub2(anchor, delta)));
        }
      }
    });
  }
  var defaultLimits = (bone) => ({ swing: /head|neck/i.test(bone) ? 35 : /leg|arm/i.test(bone) ? 60 : 45, twist: /leg|arm/i.test(bone) ? 15 : 22.5 });
  function setBody(config, v, id, key2, value) {
    if (SHARED_BODY.includes(key2)) setShared(config, "bodies", id, key2, value);
    else setLocal(config, v, "bodies", id, key2, value);
  }
  function setMassMode(config, infos, v, id, mode) {
    const body = infos[v].bodies[id];
    if (mode === "mass") {
      setLocal(config, v, "bodies", id, "mass", Number(body.mass.toPrecision(6)));
      return;
    }
    const volume = body.shapes.reduce((n, s) => n + s.size.reduce((a, b) => a * b, 1), 0) * (infos[v].scale / 16) ** 3;
    clearLocal(config, v, "bodies", id, "mass");
    if (volume > 0) setShared(config, "bodies", id, "density", Number((body.mass / volume).toPrecision(6)));
  }
  function ownShapes(config, infos, id) {
    infos.forEach((info, i) => {
      if (!config.variants[i].bodies?.[id]?.shapes) setLocal(config, i, "bodies", id, "shapes", copy2(info.bodies[id].shapes));
    });
    delete config.bodies[id].shapes;
  }
  function setShape(config, infos, v, id, index, value) {
    ownShapes(config, infos, id);
    const box = config.variants[v].bodies[id].shapes[index];
    if (value.position || value.rotation) {
      const position = value.position ?? shapePosition(box);
      box.center = fine(position);
      box.rotation = fine(value.rotation ?? box.rotation ?? [0, 0, 0]);
      delete box.pivot;
    }
    if (value.size) box.size = fine(value.size.map((n) => Math.max(0.01, n)));
  }
  function addShape(config, infos, id) {
    ownShapes(config, infos, id);
    infos.forEach((info, i) => config.variants[i].bodies[id].shapes.push({ type: "box", center: fine(info.bodies[id].center), size: [2, 2, 2], rotation: [0, 0, 0] }));
    return config.variants[0].bodies[id].shapes.length - 1;
  }
  function removeShape(config, infos, id, index) {
    ownShapes(config, infos, id);
    if (config.variants[0].bodies[id].shapes.length === 1) fail("last_shape");
    for (const variant of config.variants) variant.bodies[id].shapes.splice(index, 1);
  }
  function refitShapes(config, infos, id) {
    const owners = new Set(Object.values(config.bodies).map((b) => b.bone));
    infos.forEach((info, i) => setLocal(config, i, "bodies", id, "shapes", [fitShape(info.geometry, info.frames, owners, config.bodies[id].bone)]));
    delete config.bodies[id].shapes;
  }
  function fitShape(geometry, frames, owners, bone, fallback) {
    const byName = new Map(geometry.bones.map((b) => [b.name, b])), dest = frames.get(bone), points = [];
    for (const source2 of geometry.bones) {
      let owner = source2.name;
      while (owner && !owners.has(owner)) owner = byName.get(owner)?.parent;
      if ((owner ?? fallback) !== bone) continue;
      const frame = frames.get(source2.name);
      for (const cube of source2.cubes ?? []) {
        if (!cube.size.every((n) => n > 0)) continue;
        const center = add2(cube.origin, scale2(cube.size, 0.5)), pivot = cube.pivot ?? center, q = modelRotation(cube.rotation ?? [0, 0, 0]);
        for (let mask = 0; mask < 8; mask++) {
          const corner = center.map((n, i) => n + (mask >> i & 1 ? 1 : -1) * (cube.size[i] / 2 + (cube.inflate ?? 0)));
          points.push(toLocal(dest, toWorld(frame, add2(pivot, rotate2(q, sub2(corner, pivot))))));
        }
      }
    }
    if (!points.length) return { type: "box", center: [...byName.get(bone)?.pivot ?? [0, 0, 0]], size: [2, 2, 2], rotation: [0, 0, 0] };
    const min = [0, 1, 2].map((i) => Math.min(...points.map((p) => p[i]))), max = [0, 1, 2].map((i) => Math.max(...points.map((p) => p[i])));
    return { type: "box", center: min.map((n, i) => (n + max[i]) / 2), size: min.map((n, i) => Math.max(0.1, max[i] - n)), rotation: [0, 0, 0] };
  }
  var uniqueId = (base, taken) => {
    let id = base.replace(/\W/g, "_");
    if (!/^[a-zA-Z_]/.test(id)) id = "body_" + id;
    while (taken[id]) id += "_";
    return id;
  };
  var isAncestor = (bones, ancestor, name) => {
    let b = bones.get(name)?.parent;
    while (b) {
      if (b === ancestor) return true;
      b = bones.get(b)?.parent;
    }
    return false;
  };
  function nearestBody(config, bones, name) {
    let b = bones.get(name)?.parent;
    while (b) {
      const id = Object.keys(config.bodies).find((k) => config.bodies[k].bone === b);
      if (id) return id;
      b = bones.get(b)?.parent;
    }
    return null;
  }
  var PARENT_END = ["anchorA", "axisA", "twistAxisA", "transitionAnchorA"];
  var ENDS = [...PARENT_END, "anchorB", "axisB", "twistAxisB", "transitionAnchorB"];
  function addBody(config, env, bone) {
    if (Object.keys(config.bodies).length >= 32) fail("body_count");
    if (Object.values(config.bodies).some((b) => b.bone === bone)) fail("duplicate_bone", [bone]);
    const infos = inspect(config, env), bones = infos.at(-1).bones;
    if (!bones.has(bone)) fail("bone_missing", [bone]);
    const id = uniqueId(bone, config.bodies), parent = nearestBody(config, bones, bone), owners = /* @__PURE__ */ new Set([...Object.values(config.bodies).map((b) => b.bone), bone]), moved = [];
    for (const [jid, j] of Object.entries(config.joints)) if (parent && j.a === parent && isAncestor(bones, bone, config.bodies[j.b].bone)) {
      setShared(config, "joints", jid, "a", id);
      clearAll(config, "joints", jid, PARENT_END);
      moved.push(jid);
    }
    config.bodies[id] = { bone, density: Object.values(config.bodies).find((b) => b.density !== void 0)?.density ?? 1e3 };
    infos.forEach((info, i) => setLocal(config, i, "bodies", id, "shapes", [fitShape(info.geometry, info.frames, owners, bone)]));
    if (parent) {
      const jid = uniqueId(bone, config.joints);
      config.joints[jid] = { type: "coneTwist", a: parent, b: id, ...defaultLimits(bone) };
      moved.push(jid);
    }
    prune(config);
    const after = inspect(config, env);
    for (const jid of moved) alignJoint(config, after, jid);
    config.collisionPairs = [...config.collisionPairs ?? [], ...autoCollisionPairs(config, env).filter((p) => p.includes(id))];
    return id;
  }
  function removeBody(config, env, id) {
    if (Object.keys(config.bodies).length === 1) fail("last_body");
    const parent = Object.values(config.joints).find((j) => j.b === id)?.a, moved = [];
    for (const [jid, j] of Object.entries(config.joints)) {
      if (j.b === id || j.a === id && (!parent || parent === j.b)) {
        delete config.joints[jid];
        continue;
      }
      if (j.a === id) {
        setShared(config, "joints", jid, "a", parent);
        clearAll(config, "joints", jid, PARENT_END);
        moved.push(jid);
      }
    }
    delete config.bodies[id];
    prune(config);
    const after = inspect(config, env);
    for (const jid of moved) alignJoint(config, after, jid);
  }
  function dropBodies(config, ids) {
    for (const id of ids) delete config.bodies[id];
    for (const [jid, j] of Object.entries(config.joints)) if (!config.bodies[j.a] || !config.bodies[j.b]) delete config.joints[jid];
    return prune(config);
  }
  function setJointBody(config, infos, id, side, value) {
    const j = config.joints[id], a = side === "a" ? value : j.a, b = side === "b" ? value : j.b;
    if (a === b || !config.bodies[value]) fail("joint_body", [id]);
    if (Object.entries(config.joints).some(([other, x]) => other !== id && [x.a, x.b].sort().join() === [a, b].sort().join())) fail("joint_duplicate");
    setShared(config, "joints", id, side, value);
    clearAll(config, "joints", id, ENDS);
    alignJoint(config, infos, id);
  }
  function addJoint(config, infos, a, b) {
    if (a === b || !config.bodies[a] || !config.bodies[b]) fail("joint_body", [b]);
    if (Object.values(config.joints).some((j) => [j.a, j.b].sort().join() === [a, b].sort().join())) fail("joint_duplicate");
    const id = uniqueId(b, config.joints);
    config.joints[id] = { type: "coneTwist", a, b, ...defaultLimits(config.bodies[b].bone) };
    alignJoint(config, infos, id);
    return id;
  }
  function removeJoint(config, id) {
    delete config.joints[id];
    prune(config);
  }
  function setCollision(config, a, b, enabled) {
    config.collisionPairs = (config.collisionPairs ?? []).filter((p) => !(p.includes(a) && p.includes(b)));
    if (enabled) config.collisionPairs.push([a, b]);
  }
  function worldBoxes(info, id) {
    const body = info.bodies[id];
    return body.shapes.map((s) => {
      const q = multiply2(body.frame.q, modelRotation(s.rotation ?? [0, 0, 0]));
      return { center: toWorld(body.frame, shapePosition(s)), half: scale2(s.size, 0.5), axes: [[1, 0, 0], [0, 1, 0], [0, 0, 1]].map((e) => rotate2(q, e)) };
    });
  }
  function separation(a, b) {
    const d = sub2(b.center, a.center), axes2 = [...a.axes, ...b.axes];
    for (const u of a.axes) for (const w of b.axes) axes2.push(cross2(u, w));
    const radius = (box, n) => box.axes.reduce((s, u, k) => s + Math.abs(dot2(u, n)) * box.half[k], 0);
    let gap = -Infinity;
    for (const axis2 of axes2) {
      const n = unit(axis2);
      if (n) gap = Math.max(gap, Math.abs(dot2(d, n)) - radius(a, n) - radius(b, n));
    }
    return gap;
  }
  function autoCollisionPairs(config, env) {
    const infos = inspect({ ...config, collisionPairs: [] }, env), ids = Object.keys(config.bodies);
    const models = infos.map((info) => Object.fromEntries(ids.map((id) => [id, worldBoxes(info, id)])));
    const jointed = new Set(Object.values(config.joints ?? {}).map((j) => [j.a, j.b].sort().join()));
    const pairs = [];
    for (let i = 0; i < ids.length; i++) for (let k = i + 1; k < ids.length; k++) {
      const threshold = jointed.has([ids[i], ids[k]].sort().join()) ? 0.05 : -0.05;
      if (models.every((boxes) => boxes[ids[i]].every((a) => boxes[ids[k]].every((b) => separation(a, b) > threshold)))) pairs.push([ids[i], ids[k]]);
    }
    return pairs;
  }
  function setScale(config, v, value) {
    const same2 = config.variants.every((x) => (x.scale ?? 1) === (config.variants[v].scale ?? 1));
    config.variants.forEach((x, i) => {
      if (same2 || i === v) x.scale = value;
    });
  }

  // src/core/parse.mjs
  var forbidden = /* @__PURE__ */ new Set(["constructor", "prototype", "__proto__"]);
  var aliases = { variable: "v", temp: "t", query: "q", context: "c" };
  var precedence = { "??": 1, "||": 2, "&&": 3, "==": 4, "!=": 4, "<": 5, ">": 5, "<=": 5, ">=": 5, "+": 6, "-": 6, "*": 7, "/": 7, "%": 7 };
  function parseExpression(source2) {
    if (typeof source2 === "number" || typeof source2 === "boolean") {
      if (!Number.isFinite(Number(source2))) fail("expression", [String(source2)]);
      return { kind: "value", value: Number(source2) };
    }
    source2 = String(source2);
    const tokens = [];
    let offset = 0, index = 0;
    const pattern = /\s*(?:(\d*\.\d+|\d+\.?\d*)([eE][+-]?\d+)?|([a-zA-Z_]\w*)|'([^'\r\n]*)'|(\?\?|\|\||&&|==|!=|<=|>=|[+\-*/%<>()!?:.,]))/y;
    while (offset < source2.length) {
      pattern.lastIndex = offset;
      const token = pattern.exec(source2);
      if (!token) {
        if (!source2.slice(offset).trim()) break;
        fail("expression", [source2.slice(offset, offset + 80)]);
      }
      offset = pattern.lastIndex;
      tokens.push(token[1] !== void 0 ? { type: "value", value: Number(token[1] + (token[2] ?? "")) } : token[3] ? { type: "name", value: token[3] } : token[4] !== void 0 ? { type: "value", value: token[4] } : { type: "op", value: token[5] });
    }
    const invalid = () => fail("expression", [source2.slice(0, 80)]);
    const peek = (value) => tokens[index]?.value === value;
    const take = (value) => {
      if (!peek(value)) invalid();
      index++;
    };
    const primary = () => {
      const token = tokens[index++];
      if (!token) invalid();
      if (token.type === "value") {
        if (typeof token.value === "number" && !Number.isFinite(token.value)) invalid();
        return { kind: "value", value: token.value };
      }
      if (token.type === "op" && ["-", "+", "!"].includes(token.value)) return { kind: "unary", op: token.value, value: primary() };
      if (token.value === "(") {
        const result2 = parse(0);
        take(")");
        return result2;
      }
      if (token.type !== "name") invalid();
      if (token.value === "true" || token.value === "false") return { kind: "value", value: Number(token.value === "true") };
      const path = [aliases[token.value] ?? token.value];
      while (peek(".")) {
        index++;
        const part = tokens[index++];
        if (part?.type !== "name" || forbidden.has(part.value)) invalid();
        path.push(part.value);
      }
      if (!["v", "t", "q", "math", "c"].includes(path[0]) || path.length < 2) invalid();
      if (!peek("(")) return { kind: "read", path };
      if (!["math", "q"].includes(path[0]) || path.length !== 2) invalid();
      index++;
      const args = [];
      if (!peek(")")) {
        do {
          args.push(parse(0));
          if (!peek(",")) break;
          index++;
        } while (true);
      }
      take(")");
      return { kind: "call", path, args };
    };
    const parse = (min) => {
      let left = primary();
      while (index < tokens.length) {
        const op = tokens[index].value, p = precedence[op];
        if (p === void 0 || p < min) break;
        index++;
        left = { kind: "binary", op, left, right: parse(p + 1) };
      }
      if (min === 0 && peek("?")) {
        index++;
        const test = left, yes = parse(0);
        take(":");
        left = { kind: "if", test, yes, no: parse(0) };
      }
      return left;
    };
    const result = parse(0);
    if (index !== tokens.length) invalid();
    return result;
  }

  // src/preview/evaluator.js
  function lookup(node, emit2, slots2, tables) {
    if (!slots2 || node.kind !== "if") return;
    const index = node.test?.left;
    if (index?.kind !== "read") return;
    const key2 = index.path.join("."), leaves = [], bounds = [];
    const visit = (node2) => {
      if (node2.kind !== "if") {
        leaves.push(node2);
        return true;
      }
      const test = node2.test;
      if (test.kind !== "binary" || test.op !== "<" || test.left.kind !== "read" || test.left.path.join(".") !== key2 || test.right.kind !== "value" || !Number.isInteger(test.right.value)) return false;
      if (!visit(node2.yes)) return false;
      bounds.push(test.right.value);
      return visit(node2.no);
    };
    if (!visit(node) || leaves.length < 4 || !bounds.every((n, i) => n === bounds[0] + i)) return;
    const root = leaves[0].path?.[0], map = slots2[root];
    const reads = map && leaves.every((n) => n.kind === "read" && n.path.length === 2 && n.path[0] === root);
    if (!reads && !leaves.every((n) => n.kind === "value" && typeof n.value === "number")) return;
    const values = leaves.map((n) => {
      if (!reads) return n.value;
      const name = n.path[1];
      if (!map.has(name)) map.set(name, map.size);
      return map.get(name);
    });
    const start = bounds[0] - 1, last = bounds.at(-1), variable = emit2(index);
    const selected = `(${variable}<${start}?0:${variable}<${last}?Math.floor(${variable})-(${start}):${leaves.length - 1})`;
    const stride = values[1] - values[0];
    let result;
    if (values.every((v, i) => v === values[0] + i * stride)) result = `(${values[0]}+${stride}*${selected})`;
    else {
      const id = tables.length;
      tables.push(values);
      result = `l[${id}][${selected}]`;
    }
    return reads ? `${root}[${result}]` : result;
  }
  function source(node, slots2, tables) {
    if (node.kind === "value") return JSON.stringify(node.value);
    const emit2 = (node2) => source(node2, slots2, tables);
    const indexed = lookup(node, emit2, slots2, tables);
    if (indexed !== void 0) return indexed;
    const path = () => node.path[0] + node.path.slice(1).map((key2, i) => {
      const map = i === 0 && slots2?.[node.path[0]];
      if (map) {
        if (!map.has(key2)) map.set(key2, map.size);
        return `[${map.get(key2)}]`;
      }
      return (i ? "?." : "") + "[" + JSON.stringify(key2) + "]";
    }).join("");
    if (node.kind === "read") return path();
    if (node.kind === "call") return `(0,${path()})(${node.args.map(emit2).join(",")})`;
    if (node.kind === "unary") return node.op === "!" ? `+(!${emit2(node.value)})` : `(${node.op}(${emit2(node.value)}))`;
    if (node.kind === "if") return `(${emit2(node.test)}?${emit2(node.yes)}:${emit2(node.no)})`;
    const a = emit2(node.left), b = emit2(node.right);
    if (node.op === "&&") return `(${a}?+(!!${b}):0)`;
    if (node.op === "||") return `(${a}?1:+(!!${b}))`;
    if (["==", "!=", "<", ">", "<=", ">="].includes(node.op)) return `+(${a}${node.op === "==" ? "===" : node.op === "!=" ? "!==" : node.op}${b})`;
    return `(${a}${node.op}${b})`;
  }
  function executor({ indexed = false } = {}) {
    const slots2 = indexed ? { v: /* @__PURE__ */ new Map(), t: /* @__PURE__ */ new Map() } : null;
    const cache = /* @__PURE__ */ new Map(), functions2 = [], functionIds = /* @__PURE__ */ new Map(), tables = [], states2 = /* @__PURE__ */ new WeakMap();
    const value = (text) => {
      if (!cache.has(text)) cache.set(text, source(parseExpression(text), slots2, tables));
      return cache.get(text);
    };
    const call = (code) => {
      if (!functionIds.has(code)) {
        functionIds.set(code, functions2.length);
        functions2.push(new Function("f", "l", "v", "t", "q", "math", "c", '"use strict";' + code));
      }
      return `f[${functionIds.get(code)}](f,l,v,t,q,math,c);`;
    };
    const emit2 = (nodes, depth = 0) => {
      const parts = nodes.flat(Infinity).map((node) => {
        if (node.kind === "set") {
          const target = parseExpression(node.name);
          if (target.kind !== "read" || target.path.length !== 2 || !["v", "t"].includes(target.path[0])) fail("expression", [node.name]);
          return source(target, slots2, tables) + "=" + value(node.value) + ";";
        }
        if (node.kind === "if") return `if(${value(node.test)}){${emit2(node.yes, depth)}}${node.no.length ? `else{${emit2(node.no, depth)}}` : ""}`;
        if (node.kind === "loop") return `for(let i${depth}=0,n${depth}=Math.min(4096,Math.max(0,Math.trunc(${value(node.count)})));i${depth}<n${depth};i${depth}++){${emit2(node.body, depth + 1)}}`;
        fail("expression", [node.kind]);
      });
      if (parts.reduce((n, s) => n + s.length, 0) <= 6e3) return parts.join("");
      let batch = "", result = "";
      for (const part of parts) {
        if (batch.length + part.length > 6e3 && batch) {
          result += call(batch);
          batch = "";
        }
        batch += part;
      }
      return result + (batch ? call(batch) : "");
    };
    const compile = (nodes) => {
      const run = new Function("f", "l", "v", "t", "q", "math", "c", '"use strict";' + emit2(nodes));
      return (scope) => {
        const data = slots2 ? states2.get(scope) : scope;
        return run(functions2, tables, data.v, data.t, scope.q, scope.math, scope.c);
      };
    };
    compile.prepare = (scope) => {
      if (!slots2) return;
      const data = {};
      states2.set(scope, data);
      for (const root of ["v", "t"]) {
        const values = Array.from({ length: slots2[root].size }, () => void 0), original = scope[root];
        for (const [name, i] of slots2[root]) {
          values[i] = original[name];
          Object.defineProperty(original, name, { enumerable: true, configurable: true, get: () => values[i], set: (value2) => {
            values[i] = value2;
          } });
        }
        data[root] = values;
      }
    };
    compile.resetTemps = (scope) => {
      if (slots2) states2.get(scope).t.fill(void 0);
      else scope.t = {};
    };
    return compile;
  }

  // src/scale.js
  var key = (node) => JSON.stringify(node);
  var functions = {
    abs: Math.abs,
    min: Math.min,
    max: Math.max,
    floor: Math.floor,
    ceil: Math.ceil,
    sqrt: Math.sqrt,
    pow: Math.pow,
    clamp: (n, min, max) => Math.min(max, Math.max(min, n))
  };
  var operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "%": (a, b) => a % b,
    "==": (a, b) => Number(a === b),
    "!=": (a, b) => Number(a !== b),
    "<": (a, b) => Number(a < b),
    ">": (a, b) => Number(a > b),
    "<=": (a, b) => Number(a <= b),
    ">=": (a, b) => Number(a >= b)
  };
  function inferScale(client, variants, index) {
    try {
      const parse = (value2) => parseExpression(typeof value2 === "string" ? value2.trim().toLowerCase().replace(/^return\s+/, "").replace(/;$/, "") : value2);
      const conditions = /* @__PURE__ */ new Map(), values = /* @__PURE__ */ new Map();
      const truth = (node) => {
        if (conditions.has(key(node))) return conditions.get(key(node));
        const n = value(node);
        return Number.isFinite(n) ? !!n : void 0;
      };
      const value = (node) => {
        if (values.has(key(node))) return values.get(key(node));
        if (node.kind === "value") return typeof node.value === "number" ? node.value : void 0;
        if (node.kind === "read") return void 0;
        if (node.kind === "unary") {
          if (node.op === "!") {
            const t2 = truth(node.value);
            return t2 === void 0 ? void 0 : Number(!t2);
          }
          const n = value(node.value);
          return n === void 0 ? void 0 : node.op === "-" ? -n : n;
        }
        if (node.kind === "if") {
          const t2 = truth(node.test);
          if (t2 !== void 0) return value(t2 ? node.yes : node.no);
          const a2 = value(node.yes), b2 = value(node.no);
          return a2 === b2 ? a2 : void 0;
        }
        if (node.kind === "call") {
          const fn = node.path[0] === "math" && functions[node.path[1]], args = node.args.map(value);
          return fn && args.every(Number.isFinite) ? fn(...args) : void 0;
        }
        if (node.op === "&&" || node.op === "||") {
          const a2 = truth(node.left), b2 = truth(node.right), short2 = node.op === "||";
          if (a2 === short2 || b2 === short2) return Number(short2);
          return a2 !== void 0 && b2 !== void 0 ? Number(!short2) : void 0;
        }
        const a = value(node.left), b = value(node.right);
        return Number.isFinite(a) && Number.isFinite(b) ? operations[node.op]?.(a, b) : void 0;
      };
      const assume = (node, result) => {
        const existing = truth(node);
        if (existing !== void 0 && existing !== result) throw new Error("Conflicting model conditions");
        conditions.set(key(node), result);
        if (node.kind === "unary" && node.op === "!") assume(node.value, !result);
        if (node.kind === "binary") {
          if (node.op === "&&" && result || node.op === "||" && !result) {
            assume(node.left, result);
            assume(node.right, result);
          }
          if (node.op === "==" && result || node.op === "!=" && !result) {
            for (const [a, b] of [[node.left, node.right], [node.right, node.left]]) {
              const n = value(b);
              if (a.kind === "read" && Number.isFinite(n)) values.set(key(a), n);
            }
          }
        }
      };
      const expression2 = parse(client.scripts?.scale ?? 1);
      if (value(expression2) === void 0) {
        for (let i = 0; i <= index; i++) if (variants[i].when !== void 0) assume(parse(variants[i].when), i === index);
      }
      const scale3 = value(expression2);
      return Number.isFinite(scale3) && scale3 >= 1e-3 && scale3 <= 100 ? scale3 : 1;
    } catch {
      return 1;
    }
  }

  // src/config.js
  var clone = (value) => JSON.parse(JSON.stringify(value));
  var modelSignature = (g) => JSON.stringify(g.bones.map((b) => ({ name: b.name, parent: b.parent, pivot: b.pivot ?? [0, 0, 0], rotation: b.rotation ?? [0, 0, 0], cubes: b.cubes ?? [] })));
  var excluded = /^minecraft:(?:arrow|snowball|egg|ender_pearl|eye_of_ender_signal|fireball|small_fireball|dragon_fireball|wither_skull(?:_dangerous)?|thrown_trident|xp_orb|xp_bottle|item|painting|item_frame|leash_knot|fishing_hook|lightning_bolt|area_effect_cloud|tnt|falling_block|fireworks_rocket|boat|chest_boat|.*minecart|armor_stand)$/;
  function builtInConfig(client, resources) {
    if (client.identifier !== "minecraft:villager_v2") return null;
    const config = clone(villager_default);
    delete config.$schema;
    for (const variant of config.variants) {
      const geometry = resources.geometries.get(client.geometry[variant.geometry]);
      if (!geometry || modelSignature(geometry) !== JSON.stringify(villager_models_default[geometry.description.identifier])) return null;
    }
    return config;
  }
  function entityRows(resources) {
    return [...resources.clients].map(([id, record]) => {
      const client = descriptionOf(record), missing = Object.values(client.geometry ?? {}).filter((g) => !resources.geometries.has(g));
      let config = builtInConfig(client, resources), error;
      const unavailable = excluded.test(id) ? "unsupported" : missing.length || !Object.keys(client.geometry ?? {}).length ? "missing" : null;
      if (!config && !unavailable) try {
        config = autoConfig(client, resources);
      } catch (e) {
        error = e.message;
      }
      return { id, selected: !!config && !unavailable, config, status: unavailable ?? (config ? "ready" : "unconfigured"), missing, ...error ? { error } : {} };
    }).sort((a, b) => a.id.localeCompare(b.id));
  }
  function autoConfig(client, resources, variants) {
    const aliases2 = Object.keys(client.geometry), defaultAlias = aliases2.includes("default") ? "default" : aliases2[0];
    const models = variants ?? [{ geometry: defaultAlias }];
    const selected = models.map((v, i) => ({ ...v, scale: v.scale ?? inferScale(client, models, i) }));
    const first = resources.geometries.get(client.geometry[selected.at(-1).geometry]);
    if (!first) fail("geometry", [selected.at(-1).geometry]);
    const bodies = {}, joints = {}, used = /* @__PURE__ */ new Set(), byBone = /* @__PURE__ */ new Map();
    const volume = (bone) => (bone.cubes ?? []).reduce((n, c) => n + (c.size.every((n2) => n2 > 0) ? c.size.reduce((a, b) => a * b, 1) : 0), 0);
    const candidates = first.bones.filter((b) => volume(b) > 0 && selected.every((v) => resources.geometries.get(client.geometry[v.geometry])?.bones.some((other) => other.name === b.name)));
    const largest = candidates.slice().sort((a, b) => volume(b) - volume(a))[0];
    const byName = new Map(first.bones.map((b) => [b.name, b]));
    for (const bone of first.bones) {
      const seen = /* @__PURE__ */ new Set();
      let b = bone;
      while (b) {
        if (seen.has(b.name)) fail("bone_cycle", [b.name]);
        seen.add(b.name);
        if (b.parent && !byName.has(b.parent)) fail("bone_missing", [b.parent]);
        b = byName.get(b.parent);
      }
    }
    const decorative = /(?:nose|hat|brim|eyebrow|eyelash|teeth|tooth|finger|decoration|accessory)/i;
    const chosen = candidates.filter((b) => b === largest || !decorative.test(b.name) && !(byName.has(b.parent) && volume(b) < volume(byName.get(b.parent)) * 0.04)).sort((a, b) => volume(b) - volume(a)).slice(0, 32);
    for (const bone of first.bones) {
      if (!chosen.includes(bone)) continue;
      let id = bone.name.replace(/\W/g, "_");
      if (!/^[a-zA-Z_]/.test(id)) id = "body_" + id;
      while (used.has(id)) id += "_";
      used.add(id);
      byBone.set(bone.name, id);
      bodies[id] = { bone: bone.name, density: 1e3 };
    }
    const ancestors = (bone) => {
      const result = [];
      let parent = bone.parent;
      while (parent) {
        result.push(parent);
        parent = byName.get(parent)?.parent;
      }
      return result;
    };
    const root = chosen.filter((b) => !ancestors(b).some((name) => byBone.has(name))).sort((a, b) => volume(b) - volume(a))[0];
    const rootId = byBone.get(root?.name);
    for (const [bone, id] of byBone) {
      let parent = first.bones.find((b) => b.name === bone)?.parent;
      while (parent && !byBone.has(parent)) parent = first.bones.find((b) => b.name === parent)?.parent;
      const a = parent ? byBone.get(parent) : id === rootId ? null : rootId;
      if (a) joints[id] = { type: "coneTwist", a, b: id, ...defaultLimits(bone) };
    }
    const owners = new Set(byBone.keys());
    const fitted = selected.map((v) => {
      const geometry = resources.geometries.get(client.geometry[v.geometry]), frames = boneFrames(geometry);
      return Object.fromEntries(Object.entries(bodies).map(([id, body]) => [id, [fitShape(geometry, frames, owners, body.bone, largest?.name)]]));
    });
    const config = {
      formatVersion: 1,
      bodies: Object.fromEntries(Object.entries(bodies).map(([id, body]) => [id, { ...body, shapes: fitted.at(-1)[id] }])),
      joints,
      collisionPairs: [],
      variants: selected.map((v, i) => i < selected.length - 1 ? { ...v, bodies: Object.fromEntries(Object.entries(fitted[i]).map(([id, shapes]) => [id, { shapes }])) } : { ...v })
    };
    const infos = inspect(config, { resources, client });
    for (const id of Object.keys(joints)) alignJoint(config, infos, id);
    config.collisionPairs = autoCollisionPairs(config, { resources, client });
    normalizeModel(config, resources, client);
    return config;
  }
  function variantConfig(config, index) {
    const result = clone(config), variant = result.variants[index];
    for (const [id, overrides] of Object.entries(variant.bodies ?? {})) result.bodies[id] = { ...result.bodies[id], ...overrides };
    for (const [id, overrides] of Object.entries(variant.joints ?? {})) result.joints[id] = { ...result.joints[id], ...overrides };
    result.variants = [{ geometry: variant.geometry, scale: variant.scale }];
    return result;
  }
  function fitBoxes(boxes, source2, target) {
    if (boxes.length === 1) return [target];
    const ratio = target.size.map((n, i) => n / source2.size[i]);
    return boxes.map((box) => {
      const center = shapePosition(box), q = modelRotation(box.rotation ?? [0, 0, 0]), inverse2 = conjugate(q), half = [0, 0, 0];
      for (let mask = 0; mask < 8; mask++) {
        const corner = rotate2(q, box.size.map((n, i) => n / 2 * (mask >> i & 1 ? 1 : -1)));
        const local = rotate2(inverse2, corner.map((n, i) => n * ratio[i]));
        local.forEach((n, i) => half[i] = Math.max(half[i], Math.abs(n)));
      }
      return { type: "box", center: add2(target.center, sub2(center, source2.center).map((n, i) => n * ratio[i])), size: half.map((n) => n * 2), rotation: box.rotation ?? [0, 0, 0] };
    });
  }
  function selectModels(config, env, selected) {
    if (!selected.length || selected.at(-1).when !== void 0 || selected.filter((v) => v.when === void 0).length !== 1) fail("variants");
    if (new Set(selected.map((v) => v.geometry)).size !== selected.length) fail("model_duplicate");
    const infos = inspect(config, env), result = clone(config), owners = new Set(Object.values(config.bodies).map((b) => b.bone));
    const local = (base, overrides, shared) => ({ ...Object.fromEntries(Object.entries(base).filter(([key2]) => !shared.includes(key2))), ...overrides });
    const newIndices = [];
    result.variants = selected.map((selection, index) => {
      const old = config.variants.findIndex((v) => v.geometry === selection.geometry);
      const geometry = env.resources.geometries.get(env.client.geometry[selection.geometry] ?? selection.geometry);
      if (!geometry) fail("geometry", [selection.geometry]);
      const variant = { ...selection, scale: selection.scale ?? (old >= 0 ? config.variants[old].scale : void 0) ?? inferScale(env.client, selected, index), bodies: {}, joints: {} };
      if (old >= 0) {
        for (const id of Object.keys(config.bodies)) variant.bodies[id] = clone(local(config.bodies[id], config.variants[old].bodies?.[id], SHARED_BODY));
        for (const id of Object.keys(config.joints)) variant.joints[id] = clone(local(config.joints[id], config.variants[old].joints?.[id], SHARED_JOINT));
        return variant;
      }
      const source2 = infos.at(-1), frames = boneFrames(geometry), sourceIndex = infos.length - 1;
      for (const [id, body] of Object.entries(config.bodies)) {
        if (!frames.has(body.bone)) fail("bone_in_geometry", [geometry.description.identifier, body.bone]);
        const before = source2.bodies[id], reference = fitShape(source2.geometry, source2.frames, owners, body.bone);
        const target = fitShape(geometry, frames, owners, body.bone), shapes = fitBoxes(before.shapes, reference, target);
        const values = effective(config, sourceIndex, "bodies", id);
        variant.bodies[id] = { ...Object.fromEntries(Object.entries(values).filter(([key2]) => SHARED_BODY.includes(key2) && key2 !== "bone")), shapes };
        if (before.explicitMass) {
          const volume = (boxes) => boxes.reduce((sum, s) => sum + s.size.reduce((a, b) => a * b, 1), 0);
          variant.bodies[id].mass = before.mass * volume(shapes) / volume(before.shapes) * (variant.scale / source2.scale) ** 3;
        }
      }
      newIndices.push(index);
      return variant;
    });
    for (const body of Object.values(result.bodies)) for (const key2 of Object.keys(body)) if (!SHARED_BODY.includes(key2)) delete body[key2];
    for (const joint of Object.values(result.joints)) for (const key2 of Object.keys(joint)) if (!SHARED_JOINT.includes(key2)) delete joint[key2];
    const after = inspect(result, env);
    for (const index of newIndices) for (const id of Object.keys(result.joints)) alignJoint(result, after, id, index);
    const changed = selected.length !== config.variants.length || selected.some((v) => !config.variants.some((old) => old.geometry === v.geometry));
    if (changed) {
      const key2 = (p) => [...p].sort().join(), beforePairs = new Set(autoCollisionPairs(config, env).map(key2)), existing = new Set((config.collisionPairs ?? []).map(key2));
      result.collisionPairs = autoCollisionPairs(result, env).filter((p) => !beforePairs.has(key2(p)) || existing.has(key2(p)));
      const included = new Set(result.collisionPairs.map(key2));
      for (const pair of config.collisionPairs ?? []) if (!beforePairs.has(key2(pair)) && !included.has(key2(pair))) result.collisionPairs.push([...pair]);
    }
    normalizeModel(result, env.resources, env.client);
    return result;
  }

  // src/core/output.mjs
  function outputModel(config, resources, client) {
    const rig = normalizeModel(config, resources, client), level = config.outputLevel ?? "standard";
    if (level === "standard") return rig;
    const s = rig.simulation;
    s.iterations = Math.max(1, Math.ceil(s.iterations / 3));
    s.contactLimit = Math.min(s.contactLimit, Math.max(8, rig.shapes.length * 4, Math.floor(s.contactLimit / 2)));
    if (level === "medium" || level === "heavy") rig.shapePairs = [];
    if (level === "heavy") {
      s.iterations = 1;
      s.contactLimit = Math.min(s.contactLimit, Math.max(8, rig.shapes.length * 4));
      rig.contactFriction = false;
    }
    return rig;
  }

  // src/core/compact.mjs
  var expr = (e) => e.kind === "value" ? typeof e.value === "string" ? "'" + e.value + "'" : String(e.value) : e.kind === "read" ? e.path.join(".") : e.kind === "call" ? e.path.join(".") + "(" + e.args.map(expr).join(",") + ")" : e.kind === "unary" ? "(" + e.op + expr(e.value) + ")" : e.kind === "binary" ? "(" + expr(e.left) + e.op + expr(e.right) + ")" : "(" + expr(e.test) + "?" + expr(e.yes) + ":" + expr(e.no) + ")";
  var same = (a) => a.every((x) => JSON.stringify(x) === JSON.stringify(a[0]));
  function mergeExpr(values, index) {
    if (same(values)) return expr(values[0]);
    const first = values[0], kind = first.kind;
    if (values.some((v) => v.kind !== kind)) return choose(index, values.map(expr));
    if (kind === "binary" && values.every((v) => v.op === first.op)) return "(" + mergeExpr(values.map((v) => v.left), index) + first.op + mergeExpr(values.map((v) => v.right), index) + ")";
    if (kind === "unary" && values.every((v) => v.op === first.op)) return "(" + first.op + mergeExpr(values.map((v) => v.value), index) + ")";
    if (kind === "call" && values.every((v) => v.path.join(".") === first.path.join(".") && v.args.length === first.args.length)) return first.path.join(".") + "(" + first.args.map((_, i) => mergeExpr(values.map((v) => v.args[i]), index)).join(",") + ")";
    if (kind === "if") return "(" + mergeExpr(values.map((v) => v.test), index) + "?" + mergeExpr(values.map((v) => v.yes), index) + ":" + mergeExpr(values.map((v) => v.no), index) + ")";
    return choose(index, values.map(expr));
  }
  function mergeGroups(groups, index) {
    if (!groups.length) return [];
    groups = groups.map((g) => [g].flat(Infinity));
    if (groups.some((g) => g.length !== groups[0].length)) throw new Error("Different block lengths");
    const merge = (values) => same(values) ? values[0] : mergeExpr(values.map(parseExpression), index);
    return groups[0].map((first, i) => {
      const nodes = groups.map((g) => g[i]);
      if (nodes.some((n) => n.kind !== first.kind)) throw new Error("Different nodes");
      if (first.kind === "set") {
        if (!nodes.every((n) => n.name === first.name)) throw new Error("Different targets " + nodes.map((n) => n.name));
        return A(first.name, merge(nodes.map((n) => n.value)));
      }
      if (first.kind === "if") return If(merge(nodes.map((n) => n.test)), mergeGroups(nodes.map((n) => n.yes), index), mergeGroups(nodes.map((n) => n.no), index));
      return Loop(merge(nodes.map((n) => n.count)), mergeGroups(nodes.map((n) => n.body), index));
    });
  }
  function rewrite(nodes, replace) {
    return [nodes].flat(Infinity).map((n) => n.kind === "set" ? A(replace(n.name), typeof n.value === "string" ? replace(n.value) : n.value) : n.kind === "if" ? If(replace(n.test), rewrite(n.yes, replace), rewrite(n.no, replace)) : Loop(typeof n.count === "string" ? replace(n.count) : n.count, rewrite(n.body, replace)));
  }
  function compactBegin(rig, original, capture, act) {
    const index = "t.activation_index", bodies = rig.bodies, bodyIds = bodies.map((_, i) => i), joints = rig.joints, jointIds = joints.map((_, i) => i);
    const captureGroups = capture.at(-1).map((g, i) => rewrite(g, (s) => s.replace(new RegExp("v\\.pose" + i + "([a-z]\\w*)", "g"), "v.capture_pose.$1")));
    const newCapture = [capture.slice(0, -1), A(index, 0), Loop(bodies.length, [A("v.capture_pose", 0), mergeGroups(captureGroups, index), dispatch(index, bodyIds, (i) => A("v.pose" + i, "v.capture_pose")), A(index, index + "+1")])];
    const bodyGroup = (groups, readPose) => {
      const transformed = groups.map((g, i) => rewrite(g, (s) => s.replace(new RegExp("v\\.b" + i + "([a-z]\\w*)", "g"), "v.activate_body.$1").replace(new RegExp("v\\.pose" + i + "([a-z]\\w*)", "g"), "v.activate_pose.$1")));
      return [A(index, 0), Loop(bodies.length, [
        A("v.activate_body", choose(index, bodyIds.map((i) => "v.b" + i))),
        ...readPose ? [A("v.activate_pose", choose(index, bodyIds.map((i) => "v.pose" + i)))] : [],
        mergeGroups(transformed, index),
        dispatch(index, bodyIds, (i) => A("v.b" + i, "v.activate_body")),
        A(index, index + "+1")
      ])];
    };
    act[4] = bodyGroup(act[4], true);
    const jointGroups = act[5].map((g, i) => rewrite(g, (s) => s.replace(new RegExp("v\\.j" + i + "([a-z]\\w*)", "g"), "v.activate_joint.$1").replace(new RegExp("v\\.b" + joints[i].a + "([a-z]\\w*)", "g"), "v.activate_ja.$1").replace(new RegExp("v\\.b" + joints[i].b + "([a-z]\\w*)", "g"), "v.activate_jb.$1")));
    act[5] = joints.length ? [A(index, 0), Loop(joints.length, [
      A("v.activate_joint", choose(index, jointIds.map((i) => "v.j" + i))),
      A("v.activate_ja", choose(index, joints.map((j) => "v.b" + j.a))),
      A("v.activate_jb", choose(index, joints.map((j) => "v.b" + j.b))),
      mergeGroups(jointGroups, index),
      dispatch(index, jointIds, (i) => A("v.j" + i, "v.activate_joint")),
      A(index, index + "+1")
    ])] : [];
    act[act.length - 1] = bodyGroup(act.at(-1), false);
    const begin = structuredClone(original);
    const inactive = begin.find((n) => n.kind === "if" && n.test === "!v.active");
    inactive.yes.find((n) => n.kind === "if" && n.test === "v.frames>0").yes = newCapture.flat(Infinity);
    inactive.yes.find((n) => n.kind === "if" && n.test !== "v.frames>0").yes = act.flat(Infinity);
    return begin;
  }
  function compactOutput(rig, boneOutput2) {
    const children = rig.bodies.flatMap((b, i) => b.parent >= 0 ? [i] : []);
    if (!children.length) return [];
    const merge = (values) => {
      if (Array.isArray(values[0])) return values[0].map((_, i) => merge(values.map((v) => v[i])));
      if (values[0] && typeof values[0] === "object") return Object.fromEntries(Object.keys(values[0]).map((k) => [k, merge(values.map((v) => v[k]))]));
      return choose("t.output_index", values);
    };
    const fields = ["modelCenter", "pivot", "parentTransform", "bindRotation"];
    const pick = (body) => Object.fromEntries(fields.map((k) => [k, body[k]]));
    const fakeBodies = [merge(children.map((i) => pick(rig.bodies[i]))), merge(children.map((i) => pick(rig.bodies[rig.bodies[i].parent])))];
    fakeBodies[0].parent = 1;
    const mapNodes = (nodes, replace) => [nodes].flat(Infinity).map((n) => n.kind === "set" ? { ...n, name: replace(n.name), value: typeof n.value === "string" ? replace(n.value) : n.value } : n.kind === "if" ? { ...n, test: replace(n.test), yes: mapNodes(n.yes, replace), no: mapNodes(n.no, replace) } : { ...n, count: typeof n.count === "string" ? replace(n.count) : n.count, body: mapNodes(n.body, replace) });
    const genericOutput = mapNodes(boneOutput2({ bodies: fakeBodies }, 0), (s) => s.replace(/v\.render([01])(\w+)/g, "v.output_render$1$2").replace(/v\.out0(\w+)/g, "t.output_result$1"));
    const outputFields = axes.map((k) => "p" + k).concat(axes.map((k) => "r" + k));
    const output = [A("t.output_index", 0), Loop(children.length, [
      ...[0, 1].flatMap((p) => [...axes, ...quat.map((k) => "q" + k)].map((k) => A("v.output_render" + p + k, choose("t.output_index", children.map((i) => "v.render" + (p ? rig.bodies[i].parent : i) + k))))),
      genericOutput,
      dispatch("t.output_index", children, (i) => outputFields.map((k) => A("v.out" + i + k, "t.output_result" + k))),
      A("t.output_index", "t.output_index+1")
    ])];
    return output;
  }

  // src/core/storage.mjs
  var flatten = (nodes) => [nodes].flat(Infinity);
  var walk = (nodes, visit) => {
    for (const n of flatten(nodes)) {
      visit(n);
      if (n.kind === "if") {
        walk(n.yes, visit);
        walk(n.no, visit);
      }
      if (n.kind === "loop") walk(n.body, visit);
    }
  };
  var print = (n) => n.kind === "read" ? n.path.join(".") : n.kind === "value" ? JSON.stringify(n.value) : n.kind === "call" ? n.path.join(".") + "(" + n.args.map(print).join(",") + ")" : n.kind === "unary" ? "(" + n.op + print(n.value) + ")" : n.kind === "binary" ? "(" + print(n.left) + n.op + print(n.right) + ")" : "(" + print(n.test) + "?" + print(n.yes) + ":" + print(n.no) + ")";
  var roots = (n) => n.kind === "read" && n.path.length === 2 && n.path[0] === "v" ? [print(n)] : n.kind === "if" ? [...roots(n.yes), ...roots(n.no)] : [];
  function prepareRecords(program) {
    const schemas = /* @__PURE__ */ new Map(), assignments = [];
    const all = [program.initialize, program.frame, program.rootOutputs];
    walk(all, (n) => {
      if (n.kind !== "set") return;
      assignments.push({ ...n, expression: parseExpression(n.value) });
      const match = /^(v\.\w+)\.(\w+)$/.exec(n.name);
      if (match) {
        if (!schemas.has(match[1])) schemas.set(match[1], /* @__PURE__ */ new Set());
        schemas.get(match[1]).add(match[2]);
      }
    });
    let changed = true;
    while (changed) {
      changed = false;
      for (const n of assignments) {
        if (!/^v\.\w+$/.test(n.name)) continue;
        const linked = [n.name, ...roots(n.expression)];
        if (linked.length < 2 || !linked.some((k) => schemas.has(k))) continue;
        const fields = new Set(linked.flatMap((k) => [...schemas.get(k) ?? []]));
        for (const k of linked) {
          if (!schemas.has(k)) {
            schemas.set(k, /* @__PURE__ */ new Set());
            changed = true;
          }
          for (const f of fields) if (!schemas.get(k).has(f)) {
            schemas.get(k).add(f);
            changed = true;
          }
        }
      }
    }
    const condition = (n) => ["binary", "unary", "if"].includes(n.kind) ? print(n).slice(1, -1) : print(n);
    const direct = (name, n) => n.kind === "if" ? If(condition(n.test), direct(name, n.yes), direct(name, n.no)) : A(name, print(n));
    const transform = (nodes) => flatten(nodes).map((n) => n.kind === "set" && schemas.has(n.name) && parseExpression(n.value).kind === "if" ? direct(n.name, parseExpression(n.value)) : n.kind === "if" ? If(n.test, transform(n.yes), transform(n.no)) : n.kind === "loop" ? Loop(n.count, transform(n.body)) : n);
    const defaults = [...schemas].flatMap(([root, fields]) => [A(root, 0), ...[...fields].map((field) => A(root + "." + field, 0))]);
    const initialized = /* @__PURE__ */ new Set();
    walk(program.initialize, (n) => {
      if (n.kind === "set") initialized.add(n.name);
    });
    for (const n of assignments) if (/^v\.\w+$/.test(n.name) && !schemas.has(n.name) && !initialized.has(n.name)) {
      defaults.push(A(n.name, 0));
      initialized.add(n.name);
    }
    return { ...program, initialize: [...defaults, ...transform(program.initialize)], frame: program.frame.map(transform), rootOutputs: program.rootOutputs.map(transform) };
  }
  var scalarName = (value) => typeof value === "string" ? value.replace(/\bv\.(\w+)\.(\w+)/g, (_, root, field) => "v." + root + (/^(?:[bcdsj]|pose)\d+$/.test(root) ? "" : "_") + field) : value;
  function lowerRecords(input) {
    const program = prepareRecords(input);
    const fields = /* @__PURE__ */ new Map();
    walk(program.initialize, (n) => {
      const match = n.kind === "set" && /^(v\.\w+)\.(\w+)$/.exec(n.name);
      if (match) {
        if (!fields.has(match[1])) fields.set(match[1], []);
        if (!fields.get(match[1]).includes(match[2])) fields.get(match[1]).push(match[2]);
      }
    });
    const transform = (nodes) => [nodes].flat(Infinity).flatMap((n) => {
      if (n.kind === "if") {
        const yes = transform(n.yes), no = transform(n.no);
        if (!yes.length && !no.length) return [];
        return yes.length ? If(scalarName(n.test), yes, no) : If("!(" + scalarName(n.test) + ")", no);
      }
      if (n.kind === "loop") {
        const body = transform(n.body);
        return body.length && Number(n.count) !== 0 ? Loop(scalarName(n.count), body) : [];
      }
      if (fields.has(n.name)) {
        if (Number(n.value) === 0) return fields.get(n.name).map((f) => A(scalarName(n.name + "." + f), 0));
        if (!fields.has(n.value)) throw new Error("Unsupported record assignment: " + n.name + "=" + n.value);
        return fields.get(n.name).map((f) => A(scalarName(n.name + "." + f), scalarName(n.value + "." + f)));
      }
      return A(scalarName(n.name), scalarName(n.value));
    });
    const initialize = transform(program.initialize), last = /* @__PURE__ */ new Map();
    initialize.forEach((n, i) => {
      if (n.kind === "set") last.set(n.name, i);
    });
    return { initialize: initialize.filter((n, i) => n.kind !== "set" || last.get(n.name) === i), frame: program.frame.map(transform), rootOutputs: program.rootOutputs.map(transform) };
  }
  function groupVariables(nodes) {
    const convert = (value) => typeof value === "string" ? value.replace(/\bv\.((?:[bcdsj]|pose)\d+)([a-z]\w*)/g, "v.$1.$2") : value;
    return [nodes].flat(Infinity).map((n) => n.kind === "set" ? A(convert(n.name), convert(n.value)) : n.kind === "if" ? If(convert(n.test), groupVariables(n.yes), groupVariables(n.no)) : Loop(convert(n.count), groupVariables(n.body)));
  }

  // src/core/minify.mjs
  var publicNames = /* @__PURE__ */ new Map([
    ["v.active", "v.ragdoll_active"],
    ["v.model_scale", "v.ragdoll_model_scale"],
    ["v.variant", "v.ragdoll_variant"]
  ]);
  var short = (index) => {
    const first = "abcdefghijklmnopqrstuvwxyz", rest = first + "0123456789";
    let name = first[index % 26];
    index = Math.floor(index / 26);
    while (index) {
      index--;
      name += rest[index % 36];
      index = Math.floor(index / 36);
    }
    return name;
  };
  var ranked = (counts) => [...counts].sort((a, b) => b[1] - a[1]).map(([name]) => name);
  var occurrences = (text, scope) => {
    const counts = /* @__PURE__ */ new Map(), pattern = new RegExp("'[^']*'|(?<![\\w.])" + scope + "\\.\\w+", "g");
    for (const [name] of text.matchAll(pattern)) if (!name.startsWith("'")) counts.set(name, (counts.get(name) ?? 0) + 1);
    return ranked(counts);
  };
  function minifier({ frequencyText = "", reservedNames = [], externalNames = [] } = {}) {
    const roots2 = /* @__PURE__ */ new Map(), reserved = /* @__PURE__ */ new Set([...reservedNames, ...externalNames]), external = new Set(externalNames);
    let count = 0;
    const variable = (name) => {
      if (roots2.has(name)) return roots2.get(name);
      let output = external.has(name) || name.startsWith("v.ragdoll_") ? name : publicNames.get(name);
      if (!output) do {
        output = "v." + short(count++);
      } while (reserved.has(output));
      roots2.set(name, output);
      return output;
    };
    for (const name of occurrences(frequencyText, "v")) variable(name);
    const run = (text) => {
      const temps = new Map(occurrences(text, "t").map((name, i) => [name, "t." + short(i)]));
      let result = text.replace(/'[^']*'|(?<![\w.])[vt]\.\w+/g, (name) => name.startsWith("'") ? name : name.startsWith("v.") ? variable(name) : temps.get(name));
      result = result.replace(/'[^']*'|(?<![\w.])(?:\d+\.\d*|\.\d+|\d+)(?:e[+-]?\d+)?/gi, (token) => {
        if (token.startsWith("'")) return token;
        const value = Number(token), options = [token, String(value).replace(/^0\./, "."), value.toExponential().replace("e+", "e")];
        return options.filter((s) => Number(s) === value).sort((a, b) => a.length - b.length)[0];
      });
      return result.replace(/'[^']*'|(?<![\w.])\(((?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?)\)/gi, (token, number2) => number2 ?? token);
    };
    run.roots = roots2;
    return run;
  }

  // src/core/chunks.mjs
  var temporaries = (value) => String(value).match(/(?<![\w.])t\.\w+/g) ?? [];
  var union = (...sets) => new Set(sets.flatMap((set2) => [...set2]));
  function liveBefore(nodes, after = /* @__PURE__ */ new Set()) {
    let live = new Set(after);
    for (const node of nodes.flat(Infinity).reverse()) {
      if (node.kind === "set") {
        live.delete(node.name);
        live = union(live, temporaries(node.value));
      } else if (node.kind === "if") {
        live = union(liveBefore(node.yes, live), liveBefore(node.no, live), temporaries(node.test));
      } else {
        let previous;
        do {
          previous = live;
          live = union(live, liveBefore(node.body, live));
        } while (live.size !== previous.size);
        live = union(live, temporaries(node.count));
      }
    }
    return live;
  }
  function replaceTemporaries(nodes, replacements) {
    const replace = (value) => typeof value === "string" ? value.replace(/(?<![\w.])t\.\w+/g, (name) => replacements.get(name) ?? name) : value;
    return nodes.flat(Infinity).map((node) => node.kind === "set" ? { ...node, name: replace(node.name), value: replace(node.value) } : node.kind === "if" ? { ...node, test: replace(node.test), yes: replaceTemporaries(node.yes, replacements), no: replaceTemporaries(node.no, replacements) } : { ...node, count: replace(node.count), body: replaceTemporaries(node.body, replacements) });
  }
  function splitStatements(nodes, source2, { limit = 64e3, target = limit - 2e3, prefix = "chunk" } = {}) {
    let gate = 0, temporary = 0;
    const partition = (nodes2, budget = limit) => {
      const result = [];
      let batch = [], estimate = 0;
      const flush = () => {
        if (!batch.length) return;
        const current = batch;
        batch = [];
        estimate = 0;
        if (source2(current).length <= budget) result.push(current);
        else if (current.length > 1) {
          const middle = Math.floor(current.length / 2);
          result.push(...partition(current.slice(0, middle), budget), ...partition(current.slice(middle), budget));
        } else fail("chunk", [source2(current).length, budget]);
      };
      for (const node of nodes2.flat(Infinity)) {
        const size = source2([node]).length;
        if (size > budget) {
          flush();
          if (node.kind === "loop" && Number.isInteger(Number(node.count)) && Number(node.count) >= 0 && Number(node.count) <= 4096) {
            result.push(...partition(Array.from({ length: Number(node.count) }, () => node.body).flat(), budget));
            continue;
          }
          if (node.kind !== "if") fail("chunk", [size, budget]);
          const flag = `v.${prefix}_gate${gate++}`;
          result.push([A(flag, `(${node.test})?1:0`)]);
          for (const [test, branch] of [[flag, node.yes], [`!${flag}`, node.no]]) {
            const overhead = source2([If(test, [])]).length;
            result.push(...partition(branch, budget - overhead).map((part) => [If(test, part)]));
          }
        } else {
          if (batch.length && estimate + size > Math.min(target, budget)) flush();
          batch.push(node);
          estimate += size;
        }
      }
      flush();
      return result;
    };
    let chunks = partition(nodes);
    while (chunks.length > 1) {
      const shared = union(...chunks.slice(1).map((chunk) => liveBefore(chunk)));
      if (!shared.size) break;
      const replacements = new Map([...shared].map((name) => [name, `v.${prefix}_temp${temporary++}`]));
      chunks = chunks.flatMap((chunk) => partition(replaceTemporaries(chunk, replacements)));
    }
    return chunks;
  }

  // src/core/control.mjs
  var materialName = (i, key2) => `v.material_${i}_${key2.toLowerCase()}`;
  var materialValue = (rig, i, key2) => `(v.has_material?${materialName(i, key2)}:(${rig.bodies[i][key2]}))`;
  var inverseMass = (rig, i) => `(v.has_material?1/${materialName(i, "mass")}:(${rig.bodies[i].inverseMass}))`;
  var inverseInertia = (rig, i, k) => `(v.has_material?(${rig.bodies[i].inverseInertia[k]})*(${rig.bodies[i].mass})/${materialName(i, "mass")}:(${rig.bodies[i].inverseInertia[k]}))`;
  var states = [...axes, ...axes.map((k) => "v" + k), ...axes.map((k) => "w" + k), ...quat.map((k) => "q" + k)];
  var tensorKeys = ["xx", "yy", "zz", "xy", "xz", "yz"];
  function controls(rig, ids) {
    const bodies = rig.bodies, indices = bodies.map((_, i) => i);
    const pick = (values, index = "t.input_body_index") => choose(index, values);
    const load = (out, index = "t.input_body_index") => states.map((k) => A(out + k, pick(indices.map((i) => "v.b" + i + k), index)));
    const save = (prefix, keys2 = states) => dispatch("t.input_body_index", indices, (i) => keys2.map((k) => A("v.b" + i + k, prefix + k)));
    const mass = (index) => pick(indices.map((i) => materialValue(rig, i, "mass")), index);
    const inertia = (prefix, index) => [
      ...axes.map((k, j) => [
        vector("t.rigid_axis", axes.map((_, i) => Number(i === j))),
        rotate(prefix + "u" + j, prefix + "q", "t.rigid_axis"),
        A(prefix + "inertia" + j, `1/((${pick(indices.map((i) => inverseInertia(rig, i, j)), index)})*256)`)
      ]),
      ...tensorKeys.map((pair) => A(prefix + "i" + pair, [0, 1, 2].map((j) => `${prefix}u${j}${pair[0]}*${prefix}u${j}${pair[1]}*${prefix}inertia${j}`).join("+")))
    ];
    const matrix = (out, prefix, vec2) => axes.map((k, i) => A(out + k, axes.map((l, j) => `${prefix}${tensorKeys.find((s) => s === k + l || s === l + k)}*${vec2}${l}`).join("+")));
    const aggregate = () => [
      A("t.total_mass", 0),
      vector("t.center", [0, 0, 0]),
      vector("t.meanv", [0, 0, 0]),
      A("t.rigid_index", 0),
      Loop(bodies.length, [
        A("t.rigid_mass", mass("t.rigid_index")),
        load("t.rigid_", "t.rigid_index"),
        A("t.total_mass", "t.total_mass+t.rigid_mass"),
        ...axes.flatMap((k) => [
          A("t.center" + k, `t.center${k}+t.rigid_${k}*t.rigid_mass`),
          A("t.meanv" + k, `t.meanv${k}+t.rigid_v${k}*t.rigid_mass`)
        ]),
        A("t.rigid_index", "t.rigid_index+1")
      ]),
      scale("t.center", "t.center", "1/t.total_mass"),
      scale("t.meanv", "t.meanv", "1/t.total_mass"),
      ...tensorKeys.map((k) => A("t.total_i" + k, 0)),
      vector("t.angular_momentum", [0, 0, 0]),
      A("t.rigid_index", 0),
      Loop(bodies.length, [
        load("t.rigid_", "t.rigid_index"),
        A("t.rigid_mass", mass("t.rigid_index")),
        inertia("t.rigid_", "t.rigid_index"),
        sub("t.rigid_r", "t.rigid_", "t.center"),
        ...tensorKeys.map((pair) => A("t.total_i" + pair, `t.total_i${pair}+t.rigid_i${pair}+t.rigid_mass*(${pair[0] === pair[1] ? axes.filter((k) => k !== pair[0]).map((k) => "t.rigid_r" + k + "*t.rigid_r" + k).join("+") : "-t.rigid_r" + pair[0] + "*t.rigid_r" + pair[1]})`)),
        sub("t.rigid_momentum", "t.rigid_v", "t.meanv"),
        scale("t.rigid_momentum", "t.rigid_momentum", "t.rigid_mass"),
        cross("t.rigid_orbital", "t.rigid_r", "t.rigid_momentum"),
        matrix("t.rigid_spin", "t.rigid_i", "t.rigid_w"),
        ...axes.map((k) => A("t.angular_momentum" + k, `t.angular_momentum${k}+t.rigid_spin${k}+t.rigid_orbital${k}`)),
        A("t.rigid_index", "t.rigid_index+1")
      ]),
      A("t.inertia_scale", "math.max(0.000000000000000000000000000001,math.max(t.total_ixx,math.max(t.total_iyy,t.total_izz)))"),
      ...tensorKeys.map((k) => A("t.total_i" + k, `t.total_i${k}/t.inertia_scale`)),
      A("t.cofactorxx", "t.total_iyy*t.total_izz-t.total_iyz*t.total_iyz"),
      A("t.cofactoryy", "t.total_ixx*t.total_izz-t.total_ixz*t.total_ixz"),
      A("t.cofactorzz", "t.total_ixx*t.total_iyy-t.total_ixy*t.total_ixy"),
      A("t.cofactorxy", "t.total_ixz*t.total_iyz-t.total_ixy*t.total_izz"),
      A("t.cofactorxz", "t.total_ixy*t.total_iyz-t.total_ixz*t.total_iyy"),
      A("t.cofactoryz", "t.total_ixy*t.total_ixz-t.total_ixx*t.total_iyz"),
      A("t.determinant", "math.max(0.000000000000000000000001,t.total_ixx*t.cofactorxx+t.total_ixy*t.cofactorxy+t.total_ixz*t.cofactorxz)"),
      ...tensorKeys.map((k) => A("t.total_inverse" + k, `t.cofactor${k}/t.determinant/t.inertia_scale`)),
      matrix("t.meanw", "t.total_inverse", "t.angular_momentum")
    ];
    const angularResponse = (out, prefix, index, torque) => [
      scale("t.response_q", prefix + "q", -1),
      A("t.response_qw", prefix + "qw"),
      rotate("t.response_local", "t.response_q", torque),
      ...axes.map((k, j) => A("t.response_local" + k, `t.response_local${k}*(${pick(indices.map((i) => inverseInertia(rig, i, j)), index)})*256`)),
      rotate(out, prefix + "q", "t.response_local")
    ];
    function apply(kind, factor = 1) {
      const force = kind === "force", root = rig.bodies.findIndex((b) => b.parent < 0);
      const velocity = [
        If("t.input_linear", If("!t.input_part&&!t.input_angular", axes.map((k) => A("t.body_v" + k, `t.body_v${k}+t.input_${k}-t.meanv${k}`)), copy("t.body_v", "t.input_"))),
        If("t.input_angular", [
          If("!t.input_part", [
            sub("t.body_r", "t.body_", "t.center"),
            If("t.input_linear", copy("t.change_w", "t.input_a"), sub("t.change_w", "t.input_a", "t.meanw")),
            cross("t.orbital_velocity", "t.change_w", "t.body_r"),
            add("t.body_v", "t.body_v", "t.orbital_velocity")
          ]),
          copy("t.body_w", "t.input_a")
        ])
      ];
      const transform = [
        If("t.input_part", [
          If("t.input_linear", axes.map((k) => A("t.body_" + k, `t.input_${k}-v.o${k}`))),
          If("t.input_rotation", copy("t.body_q", "t.input_q", quat))
        ], [
          sub("t.body_r", "t.body_", "t.center"),
          If("t.input_rotation", [rotate("t.body_r", "t.transform_q", "t.body_r"), multiply("t.body_q", "t.transform_q", "t.body_q")]),
          ...axes.map((k) => A("t.body_" + k, `t.body_r${k}+(t.input_linear?t.input_${k}-v.o${k}:t.center${k})`))
        ])
      ];
      const impulse = [
        If("t.input_part", [
          ...axes.map((k) => A("t.body_v" + k, `t.body_v${k}+t.input_${k}*(${pick(indices.map((i) => inverseMass(rig, i)))})*${factor}`)),
          copy("t.action_torque", "t.input_a"),
          If("t.input_point", [
            ...axes.map((k) => A("t.action_r" + k, `t.input_p${k}-v.o${k}-t.body_${k}`)),
            cross("t.action_offset", "t.action_r", "t.input_"),
            add("t.action_torque", "t.action_torque", "t.action_offset")
          ]),
          angularResponse("t.action_spin", "t.body_", "t.input_body_index", "t.action_torque"),
          ...axes.map((k) => A("t.body_w" + k, `t.body_w${k}+t.action_spin${k}*${factor}`))
        ], [
          sub("t.body_r", "t.body_", "t.center"),
          cross("t.orbital_velocity", "t.action_spin", "t.body_r"),
          ...axes.flatMap((k) => [A("t.body_v" + k, `t.body_v${k}+t.input_${k}/t.total_mass*${factor}+t.orbital_velocity${k}`), A("t.body_w" + k, `t.body_w${k}+t.action_spin${k}`)])
        ])
      ];
      return [
        If("!t.input_part", [
          aggregate(),
          ...!force ? [If("t.input_kind==3&&t.input_rotation", [
            ...axes.map((k) => A("t.transform_inverse" + k, `-v.b${root}q${k}`)),
            A("t.transform_inversew", `v.b${root}qw`),
            multiply("t.transform_q", "t.input_q", "t.transform_inverse")
          ])] : [],
          If(force ? "t.input_force_index>=0" : "t.input_kind==2", [
            copy("t.action_torque", "t.input_a"),
            If("t.input_point", [
              ...axes.map((k) => A("t.action_r" + k, `t.input_p${k}-v.o${k}-t.center${k}`)),
              cross("t.action_offset", "t.action_r", "t.input_"),
              add("t.action_torque", "t.action_torque", "t.action_offset")
            ]),
            matrix("t.action_spin", "t.total_inverse", "t.action_torque"),
            scale("t.action_spin", "t.action_spin", factor)
          ])
        ]),
        A("t.input_body_index", 0),
        Loop(bodies.length, [If(`t.input_part==0||t.input_part==(${pick(ids)})`, [
          load("t.body_"),
          force ? impulse : If("t.input_kind==1", velocity, If("t.input_kind==3", transform, impulse)),
          save("t.body_"),
          ...!force ? [If("t.input_kind==3", dispatch("t.input_body_index", indices, (i) => [...axes, ...quat.map((k) => "q" + k)].flatMap((k) => [A(`v.b${i}prev${k}`, "t.body_" + k), A(`v.b${i}old${k}`, "t.body_" + k)])))] : []
        ]), A("t.input_body_index", "t.input_body_index+1")])
      ];
    }
    return { apply, aggregate, angularResponse, load, save };
  }

  // simple_ragdoll/BP/scripts/ragdoll.js
  var INPUT_ANIMATION = "animation.simple_ragdoll.input";
  var MAX_TERRAIN_BOXES = 64;
  var MAX_MOTIONS = 32;
  var MAX_FORCES = 16;
  var MAX_PROPERTIES = 33;
  var MAX_JOINTS = 64;
  var MAX_LIQUIDS = 16;
  var PROPERTY_FIELDS = ["mass", "friction", "restitution", "linearDamping", "angularDamping"];
  var MOTION_FIELDS = ["seq", "kind", "part", "linear", "x", "y", "z", "angular", "ax", "ay", "az", "point", "px", "py", "pz", "rotation", "qx", "qy", "qz", "qw"];
  var FORCE_FIELDS = ["part", "x", "y", "z", "point", "px", "py", "pz", "ax", "ay", "az"];
  function partKey(name) {
    if (name === void 0) return 0;
    if (typeof name !== "string" || !name.length) throw new TypeError("part");
    let hash = 2166136261;
    for (let i = 0; i < name.length; i++) hash = Math.imul(hash ^ name.charCodeAt(i), 16777619);
    return (hash >>> 0) % 16777215 + 1;
  }

  // src/core/input.mjs
  var terrainFields = ["minx", "miny", "minz", "maxx", "maxy", "maxz", "friction", "restitution"];
  var liquidFields = ["minx", "miny", "minz", "maxx", "maxy", "maxz", "density", "drag", "angulardrag"];
  var slots = (size) => Array.from({ length: size }, (_, i) => i);
  function terrainValue(index, field) {
    return choose(index, slots(MAX_TERRAIN_BOXES).map((i) => `v.external_terrain_${i}_${field}`));
  }
  function createInputs(rig) {
    const bodies = rig.bodies, ids = bodies.map((b) => partKey(b.id)), jointIds = rig.joints.map((j) => partKey(j.id)), control = controls(rig, ids);
    if (new Set(ids).size !== ids.length || new Set(jointIds).size !== jointIds.length) throw new Error("Ragdoll identifiers have conflicting input keys");
    const initialize = [
      set("v.ragdoll_", {
        protocol: 1,
        session_high: 0,
        session_low: 0,
        revision: 0,
        control_mode: 0,
        simulation_gravity: -1,
        simulation_gravity_vector: 0,
        simulation_gx: 0,
        simulation_gy: 0,
        simulation_gz: 0,
        simulation_time_scale: 1,
        simulation_iterations: 0,
        simulation_collisions: 1,
        simulation_friction: 1,
        simulation_joints: 1,
        terrain_mode: 0,
        terrain_count: 0,
        liquid_count: 0,
        property_count: 0,
        joint_count: 0,
        force_count: 0,
        motion_first: 1,
        motion_last: 0,
        motion_ack: 0,
        motion_dropped: 0
      }),
      A("v.input_revision", 0),
      A("v.input_session_high", 0),
      A("v.input_session_low", 0),
      A("v.material_variant", -1),
      A("v.material_revision", -1),
      slots(MAX_TERRAIN_BOXES).map((i) => set(`v.ragdoll_terrain_${i}_`, Object.fromEntries(terrainFields.map((k) => [k, ["friction", "restitution"].includes(k) ? -1 : 0])))),
      slots(MAX_LIQUIDS).map((i) => set(`v.ragdoll_liquid_${i}_`, Object.fromEntries(liquidFields.map((k) => [k, 0])))),
      slots(MAX_MOTIONS).map((i) => set(`v.ragdoll_motion_${i}_`, Object.fromEntries(MOTION_FIELDS.map((k) => [k, k === "qw" ? 1 : 0])))),
      slots(MAX_FORCES).map((i) => set(`v.ragdoll_force_${i}_`, Object.fromEntries(FORCE_FIELDS.map((k) => [k, 0])))),
      slots(MAX_PROPERTIES).map((i) => set(`v.ragdoll_property_${i}_`, { part: 0, ...Object.fromEntries(PROPERTY_FIELDS.map((k) => [k.toLowerCase(), -1])) })),
      slots(MAX_JOINTS).map((i) => set(`v.ragdoll_joint_${i}_`, { id: 0, enabled: 1 })),
      bodies.map((_, i) => PROPERTY_FIELDS.map((key2) => A(materialName(i, key2), 0))),
      rig.joints.map((_, i) => A(`v.joint_enabled_${i}`, 1))
    ];
    const frame = [
      A("v.has_material", "v.ragdoll_property_count>0"),
      ["gravity", "iterations", "collisions", "friction", "joints"].map((key2) => A("v.simulation_" + key2, "v.ragdoll_simulation_" + key2)),
      A("v.gravity_pixels", `v.simulation_gravity<0?${rig.simulation.gravity * 16}:math.clamp(v.simulation_gravity,0,100)*16`),
      A("v.gravity_step", `v.simulation_gravity<0?${1 / rig.simulation.frequency * (rig.simulation.gravity * 16)}:math.clamp(v.simulation_gravity,0,100)*${16 / rig.simulation.frequency}`),
      axes.map((k) => A("v.gravity_" + k, `v.ragdoll_simulation_gravity_vector?v.ragdoll_simulation_g${k}:${k === "y" ? "-v.gravity_pixels/16" : "0"}`)),
      axes.map((k) => A("v.gravity_step_" + k, `v.gravity_${k}*${16 / rig.simulation.frequency}`)),
      If("v.input_revision!=v.ragdoll_revision||v.input_session_high!=v.ragdoll_session_high||v.input_session_low!=v.ragdoll_session_low", [
        A("v.input_revision", "v.ragdoll_revision"),
        A("v.input_session_high", "v.ragdoll_session_high"),
        A("v.input_session_low", "v.ragdoll_session_low"),
        A("v.sleep", 0),
        A("v.material_revision", -1),
        slots(MAX_TERRAIN_BOXES).map((i) => terrainFields.map((key2) => A(`v.external_terrain_${i}_${key2}`, ["friction", "restitution"].includes(key2) ? `v.ragdoll_terrain_${i}_${key2}<0?${rig.simulation.terrain[key2]}:v.ragdoll_terrain_${i}_${key2}` : `v.ragdoll_terrain_${i}_${key2}`)))
      ]),
      If("v.ragdoll_motion_ack<v.ragdoll_motion_first-1", [
        A("v.ragdoll_motion_dropped", "v.ragdoll_motion_dropped+v.ragdoll_motion_first-1-v.ragdoll_motion_ack"),
        A("v.ragdoll_motion_ack", "v.ragdoll_motion_first-1")
      ])
    ];
    const property2 = (key2) => choose("t.property_index", slots(MAX_PROPERTIES).map((i) => `v.ragdoll_property_${i}_${key2.toLowerCase()}`));
    const totalBase = "(" + bodies.map((b) => "(" + b.mass + ")").join("+") + ")";
    const properties = [If("v.material_revision!=v.ragdoll_revision||v.material_variant!=v.variant", [
      A("v.material_revision", "v.ragdoll_revision"),
      A("v.material_variant", "v.variant"),
      bodies.map((body, i) => PROPERTY_FIELDS.map((key2) => A(materialName(i, key2), body[key2]))),
      ...[false, true].map((targeted) => [A("t.property_index", 0), Loop("v.ragdoll_property_count", [
        A("t.property_target", property2("part")),
        PROPERTY_FIELDS.map((key2) => A("t.property_" + key2.toLowerCase(), property2(key2))),
        bodies.map((body, i) => If(targeted ? `t.property_target==${ids[i]}` : "t.property_target==0", PROPERTY_FIELDS.map((key2) => [
          A("t.property_value", "t.property_" + key2.toLowerCase()),
          If("t.property_value>=0", A(materialName(i, key2), key2 === "mass" && !targeted ? `t.property_value*(${body.mass})/${totalBase}` : "t.property_value"))
        ]))),
        A("t.property_index", "t.property_index+1")
      ])]),
      rig.joints.map((_, i) => A(`v.joint_enabled_${i}`, "v.simulation_joints")),
      ...rig.joints.length ? [A("t.joint_input_index", 0), Loop("v.ragdoll_joint_count", [
        A("t.joint_input_id", choose("t.joint_input_index", slots(MAX_JOINTS).map((i) => `v.ragdoll_joint_${i}_id`))),
        A("t.joint_input_enabled", choose("t.joint_input_index", slots(MAX_JOINTS).map((i) => `v.ragdoll_joint_${i}_enabled`))),
        rig.joints.map((_, i) => If(`t.joint_input_id==${jointIds[i]}`, A(`v.joint_enabled_${i}`, "t.joint_input_enabled"))),
        A("t.joint_input_index", "t.joint_input_index+1")
      ])] : []
    ])];
    const motion = [If("v.active&&v.ragdoll_motion_ack<v.ragdoll_motion_last", [
      Loop(MAX_MOTIONS, [If("v.ragdoll_motion_ack<v.ragdoll_motion_last", [
        A("t.input_slot", `math.mod(v.ragdoll_motion_ack,${MAX_MOTIONS})`),
        MOTION_FIELDS.map((key2) => A("t.input_" + key2, choose("t.input_slot", slots(MAX_MOTIONS).map((i) => `v.ragdoll_motion_${i}_${key2}`)))),
        If("t.input_seq==v.ragdoll_motion_ack+1", [control.apply("motion"), A("v.ragdoll_motion_ack", "t.input_seq"), A("v.sleep", 0)])
      ])])
    ])];
    const forces = [If("v.ragdoll_force_count>0", [
      A("v.sleep", 0),
      A("t.input_force_index", 0),
      Loop(`math.clamp(v.ragdoll_force_count,0,${MAX_FORCES})`, [
        FORCE_FIELDS.map((key2) => A("t.input_" + key2, choose("t.input_force_index", slots(MAX_FORCES).map((i) => `v.ragdoll_force_${i}_${key2}`)))),
        control.apply("force", 1 / rig.simulation.frequency),
        A("t.input_force_index", "t.input_force_index+1")
      ])
    ])];
    return { initialize, frame, properties, motion, forces };
  }

  // src/core/dynamics.mjs
  function createDynamics(rig, settings2) {
    const { bodies: BODIES, joints: JOINTS, shapes: SHAPES, shapePairs: SHAPE_PAIRS } = rig;
    const CONTACT_LIMIT = settings2.contactLimit;
    const GROUND = BODIES.length;
    const dt = 1 / settings2.frequency;
    const gravityValue = (factor = 1) => factor === 1 ? "v.gravity_pixels" : "v.gravity_step";
    const ITERATIONS = settings2.iterations;
    const slots2 = Array.from({ length: CONTACT_LIMIT }, (_, i) => i);
    const parts = [...BODIES, null];
    const contactKeys = ["g", "lo", "hi", ...["n", "ra", "rb"].flatMap((p) => axes.map((k) => p + k))];
    const pagedContacts = CONTACT_LIMIT > 128;
    const solvedContact = (i, k) => pagedContacts ? `v.contact_sorted_${i}_${k}` : `v.c${i}.${k}`;
    const bodyKeys = ["im", ...["v", "w", "dv", "dw"].flatMap((p) => axes.map((k) => p + k)), ...axes.flatMap((k) => axes.map((l) => "i" + k + l))];
    const loadBody = (out, index) => dispatch(index, parts, (_, i) => bodyKeys.filter((k) => !["iyx", "izx", "izy"].includes(k)).map((k) => A(out + k, "v.d" + i + "." + k)));
    const saveDelta = (out, index) => dispatch(index, parts, (_, i) => ["dv", "dw"].flatMap((p) => axes.map((k) => A("v.d" + i + "." + p + k, out + p + k))));
    const matrix = (out, body, p) => axes.map((k) => A(out + k, axes.map((l) => `${body}i${[k, l].sort().join("")}*${p}${l}`).join("+")));
    const basis = (out, q) => axes.map((_, i) => [vector("t.unit", axes.map((_2, j) => Number(i === j))), rotate(out + i, q, "t.unit")]);
    const shapeKeys = [...axes, ...quat.map((k) => "q" + k), ...axes.map((k) => "h" + k), "body"];
    const shapeIndices = SHAPES.map((_, i) => i);
    const loadShape = (out, index, indices = shapeIndices) => [
      ...axes.map((k, j) => A(out + "h" + k, choose(index, indices.map((i) => SHAPES[i].half[j])))),
      dispatch(index, indices, (i) => shapeKeys.filter((k) => k[0] !== "h").map((k) => A(out + k, k === "body" ? SHAPES[i].body : "v.s" + i + "." + k)))
    ];
    const swapShapes = () => [shapeKeys.map((k) => A("t.swap" + k, "t.a" + k)), shapeKeys.map((k) => A("t.a" + k, "t.b" + k)), shapeKeys.map((k) => A("t.b" + k, "t.swap" + k))];
    function initializeDynamics() {
      return [
        A("v.contact_count", 0),
        A("v.contact_overflow", 0),
        vector(`v.d${GROUND}.`, [0, 0, 0]),
        parts.flatMap((_, i) => bodyKeys.map((k) => A(`v.d${i}.${k}`, 0))),
        [...contactKeys, "l0", "l1", "l2"].map((k) => A("v.scratch_zero." + k, 0)),
        slots2.map((i) => A("v.c" + i, "v.scratch_zero")),
        pagedContacts ? slots2.map((i) => [...contactKeys, "l0", "l1", "l2"].map((k) => A(solvedContact(i, k), 0))) : [],
        JOINTS.flatMap((_, i) => Array.from({ length: 5 }, (_2, k) => A(`v.j${i}l${k}`, 0)))
      ];
    }
    function prepareBodies() {
      const sel = (values) => choose("t.body_index", values);
      const b = "v.scratch_b.", d = "v.scratch_d.", s = "v.scratch_s.";
      return [
        A("v.contact_count", 0),
        A("v.contact_overflow", 0),
        A("v.support", 0),
        A("t.body_index", 0),
        Loop(BODIES.length, [
          A("v.scratch_b", sel(BODIES.map((_, i) => "v.b" + i))),
          A("v.scratch_d", sel(BODIES.map((_, i) => "v.d" + i))),
          scale(d, b, 16),
          scale(d + "v", b + "v", 16),
          copy(d + "w", b + "w"),
          vector(d + "dv", [0, 0, 0]),
          vector(d + "dw", [0, 0, 0]),
          A(d + "im", sel(BODIES.map((_, i) => inverseMass(rig, i)))),
          basis("t.u", b + "q"),
          ...[0, 1, 2].map((j) => A("t.inverse_inertia" + j, sel(BODIES.map((_, i) => inverseInertia(rig, i, j))))),
          axes.flatMap((k) => axes.map((l) => A(d + "i" + k + l, axes.map((_, j) => "t.u" + j + k + "*t.u" + j + l + "*t.inverse_inertia" + j).join("+")))),
          dispatch("t.body_index", BODIES, (_, i) => A("v.d" + i, "v.scratch_d")),
          A("t.body_index", "t.body_index+1")
        ]),
        A("t.shape_index", 0),
        Loop(SHAPES.length, [
          A("v.scratch_s", 0),
          ...axes.map((k, j) => A("t.local" + k, choose("t.shape_index", SHAPES.map((shape) => shape.center[j])))),
          A("t.shape_body", choose("t.shape_index", SHAPES.map((shape) => shape.body))),
          A("v.scratch_b", choose("t.shape_body", BODIES.map((_, i) => "v.b" + i))),
          A("v.scratch_d", choose("t.shape_body", BODIES.map((_, i) => "v.d" + i))),
          rotate("t.offset", b + "q", "t.local"),
          add(s, "v.scratch_d.", "t.offset"),
          ...quat.map((k, j) => A("t.localq" + k, choose("t.shape_index", SHAPES.map((shape) => shape.quaternion[j])))),
          multiply(s + "q", b + "q", "t.localq"),
          ...axes.map((k, j) => A(s + "h" + k, choose("t.shape_index", SHAPES.map((shape) => shape.half[j])))),
          A(s + "body", "t.shape_body"),
          dispatch("t.shape_index", SHAPES, (_, i) => A("v.s" + i, "v.scratch_s")),
          A("t.shape_index", "t.shape_index+1")
        ]),
        A("t.shape_index", 0),
        Loop(SHAPES.length, [
          A("v.scratch_s", choose("t.shape_index", SHAPES.map((_, i) => "v.s" + i))),
          basis("t.u", s + "q"),
          axes.map((k) => A(s + "e" + k, axes.map((l, j) => "math.abs(t.u" + j + k + ")*" + s + "h" + l).join("+"))),
          dispatch("t.shape_index", SHAPES, (_, i) => A("v.s" + i, "v.scratch_s")),
          A("t.shape_index", "t.shape_index+1")
        ]),
        BODIES.map((_, i) => A("v.d" + i + ".minx", SHAPES.flatMap((s2, j) => s2.body === i ? ["(v.s" + j + ".x-v.s" + j + ".ex)"] : []).reduce((a, b2) => "math.min(" + a + "," + b2 + ")"))),
        JOINTS.flatMap((_, i) => Array.from({ length: 5 }, (_2, k) => A("v.j" + i + "l" + k, 0)))
      ];
    }
    function appendContact() {
      return [A("t.clo", "t.sort_lo"), A("t.chi", "t.sort_hi"), If(`v.contact_count<${CONTACT_LIMIT}`, [
        dispatch("v.contact_count", slots2, (i) => [...contactKeys.map((k) => A("v.c" + i + "." + k, "t.c" + k)), ...pagedContacts ? [] : [0, 1, 2].map((k) => A("v.c" + i + ".l" + k, 0))]),
        A("v.contact_count", "v.contact_count+1"),
        If(`t.cia==${GROUND} || t.cib==${GROUND}`, A("v.support", 1))
      ], A("v.contact_overflow", 1))];
    }
    const vertices = [[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]];
    const faces = [[3, 2, 1, 0], [4, 5, 6, 7], [5, 4, 0, 1], [2, 3, 7, 6], [0, 4, 7, 3], [1, 2, 6, 5]];
    const faceAxis = [2, 2, 1, 1, 0, 0], faceSign = [-1, 1, -1, 1, -1, 1];
    const polygon = Array.from({ length: 8 }, (_, i) => i);
    function appendVertex() {
      return [dispatch("t.out_count", polygon, (i) => copy("t.out" + i, "t.vertex")), A("t.out_count", "t.out_count+1")];
    }
    function collide() {
      const extent = (side) => axes.map((k, i) => `t.${side}h${k}*math.abs(${dot(`t.${side}u${i}`, "t.axis")})`).join("+");
      const faceNormal = (side) => [axes.map((k) => A("t.fn" + k, `(${choose(`t.${side}face`, faceAxis.map((i) => `t.${side}u${i}${k}`))})*(${choose(`t.${side}face`, faceSign)})`))];
      return [
        basis("t.au", "t.aq"),
        basis("t.bu", "t.bq"),
        sub("t.delta", "t.b", "t.a"),
        A("t.depth", 1e6),
        A("t.axis_id", 0),
        Loop(15, [If("t.depth>=0", [
          If("t.axis_id<6", axes.map((k) => A("t.axis" + k, choose("t.axis_id", [0, 1, 2].map((i) => `t.au${i}${k}`).concat([0, 1, 2].map((i) => `t.bu${i}${k}`))))), [
            axes.map((k) => A("t.u" + k, choose("math.floor((t.axis_id-6)/3)", [0, 1, 2].map((i) => `t.au${i}${k}`)))),
            axes.map((k) => A("t.w" + k, choose("math.mod(t.axis_id,3)", [0, 1, 2].map((i) => `t.bu${i}${k}`)))),
            cross("t.axis", "t.u", "t.w")
          ]),
          A("t.norm_axis", `math.sqrt(${dot("t.axis", "t.axis")})`),
          If("t.norm_axis>0.000001", [
            scale("t.axis", "t.axis", "1/t.norm_axis"),
            A("t.projection", dot("t.delta", "t.axis")),
            A("t.overlap", `${extent("a")}+${extent("b")}-math.abs(t.projection)`),
            If("t.overlap<t.depth", [A("t.depth", "t.overlap"), scale("t.normal", "t.axis", "t.projection<0?-1:1")])
          ])
        ]), A("t.axis_id", "t.axis_id+1")]),
        If("t.depth>=0", [
          ...["a", "b"].map((side) => [
            A(`t.${side}face`, 0),
            A("t.best", -1e6),
            faces.map((_, i) => [
              A("t.projection", `(${dot(`t.${side}u${faceAxis[i]}`, "t.normal")})*${faceSign[i] * (side === "a" ? 1 : -1)}`),
              If("t.projection>t.best", [A("t.best", "t.projection"), A(`t.${side}face`, i)])
            ])
          ]),
          faceNormal("a"),
          copy("t.reference", "t.fn"),
          A("t.reference_half", choose("t.aface", faceAxis.map((i) => "t.ah" + axes[i]))),
          A("t.count", 4),
          [0, 1, 2, 3].map((j) => [
            vector("t.local", axes.map((k, i) => `t.bh${k}*(${choose("t.bface", faces.map((f) => vertices[f[j]][i]))})`)),
            rotate("t.vertex", "t.bq", "t.local"),
            add("t.vertex", "t.vertex", "t.b"),
            copy("t.poly" + j, "t.vertex")
          ]),
          [A("t.clip_face", 0), Loop(6, [If(choose("t.aface", faceAxis) + "!=" + choose("t.clip_face", faceAxis) + "&&t.count>0", [
            vector("t.plane", axes.map((k) => "(" + choose("t.clip_face", faceAxis.map((i) => "t.au" + i + k)) + ")*(" + choose("t.clip_face", faceSign) + ")")),
            A("t.plane_half", choose("t.clip_face", faceAxis.map((i) => "t.ah" + axes[i]))),
            A("t.out_count", 0),
            axes.map((k) => A("t.start" + k, choose("t.count-1", polygon.map((i) => `t.poly${i}${k}`)))),
            sub("t.rel", "t.start", "t.a"),
            A("t.distance_start", `(${dot("t.plane", "t.rel")})-t.plane_half`),
            A("t.vertex_id", 0),
            Loop("t.count", [
              axes.map((k) => A("t.end" + k, choose("t.vertex_id", polygon.map((i) => `t.poly${i}${k}`)))),
              sub("t.rel", "t.end", "t.a"),
              A("t.distance_end", `(${dot("t.plane", "t.rel")})-t.plane_half`),
              If("(t.distance_start<0)!=(t.distance_end<0)", [
                A("t.fraction", "t.distance_start/(t.distance_start-t.distance_end)"),
                axes.map((k) => A("t.vertex" + k, `t.start${k}+(t.end${k}-t.start${k})*t.fraction`)),
                appendVertex()
              ]),
              If("t.distance_end<0", [copy("t.vertex", "t.end"), appendVertex()]),
              copy("t.start", "t.end"),
              A("t.distance_start", "t.distance_end"),
              A("t.vertex_id", "t.vertex_id+1")
            ]),
            A("t.count", "t.out_count"),
            polygon.map((i) => If(`t.count>${i}`, copy("t.poly" + i, "t.out" + i)))
          ]), A("t.clip_face", "t.clip_face+1")])],
          A("t.vertex_id", 0),
          Loop("t.count", [
            axes.map((k) => A("t.point" + k, choose("t.vertex_id", polygon.map((i) => `t.poly${i}${k}`)))),
            sub("t.rel", "t.point", "t.a"),
            A("t.distance", `(${dot("t.reference", "t.rel")})-t.reference_half`),
            If("t.distance<=0.000001", [
              A("t.cia", "t.abody"),
              A("t.cib", "t.bbody"),
              copy("t.cn", "t.normal"),
              A("t.cg", `t.distance*(${dot("t.normal", "t.reference")})`),
              axes.map((k) => A("t.cra" + k, `t.point${k}-t.reference${k}*t.distance-(${choose("t.abody", parts.map((_, i) => `v.d${i}.${k}`))})`)),
              axes.map((k) => A("t.crb" + k, `t.point${k}-(${choose("t.bbody", parts.map((_, i) => `v.d${i}.${k}`))})`)),
              appendContact()
            ]),
            A("t.vertex_id", "t.vertex_id+1")
          ])
        ])
      ];
    }
    function terrainShape() {
      return [If("v.ragdoll_terrain_mode", [
        A("t.box_index", `t.cell_id-${GROUND}`),
        dispatch("t.box_index", Array.from({ length: MAX_TERRAIN_BOXES }, (_, i) => i), (i) => axes.flatMap((k) => [A("t.box_min" + k, `v.external_terrain_${i}_min${k}`), A("t.box_max" + k, `v.external_terrain_${i}_max${k}`)])),
        ...axes.flatMap((k) => [
          A("t.b" + k, `(t.box_min${k}+(t.box_max${k}-t.box_min${k})*0.5-v.o${k})*16`),
          A("t.bh" + k, `(t.box_max${k}-t.box_min${k})*8`)
        ])
      ], [axes.map((k) => A("t.b" + k, `(t.cell${k}+0.5-v.o${k})*16`)), vector("t.bh", [8, 8, 8])])];
    }
    function contacts() {
      const at = "t.cellx-math.floor(v.ex),t.celly-math.floor(v.ey),t.cellz-math.floor(v.ez)";
      const tags = (values) => values.map((value) => "'" + value + "'").join(",");
      const solid = "q.relative_block_has_any_tag(" + at + "," + tags(settings2.terrain.includeTags) + ")" + (settings2.terrain.excludeTags.length ? "&&!q.relative_block_has_any_tag(" + at + "," + tags(settings2.terrain.excludeTags) + ")" : "");
      return [
        vector("t.min", [1e6, 1e6, 1e6]),
        vector("t.max", [-1e6, -1e6, -1e6]),
        SHAPES.map((_, i) => axes.flatMap((k) => [A("t.min" + k, "math.min(t.min" + k + ",v.s" + i + k + "-v.s" + i + "e" + k + ")"), A("t.max" + k, "math.max(t.max" + k + ",v.s" + i + k + "+v.s" + i + "e" + k + ")")])),
        axes.flatMap((k) => [A("t.min" + k, "math.floor(v.o" + k + "+t.min" + k + "/16)"), A("t.max" + k, "math.floor(v.o" + k + "+t.max" + k + "/16)")]),
        A("v.terrain_minx", "t.minx"),
        A("v.terrain_yz", "(t.maxy-t.miny+1)*(t.maxz-t.minz+1)"),
        A("t.contact_mode", SHAPE_PAIRS.length ? 0 : 1),
        Loop(SHAPE_PAIRS.length ? 2 : 1, [
          A("t.pair", 0),
          A("t.cell_id", GROUND),
          A("t.cellx", "t.minx"),
          Loop(`t.contact_mode?(v.ragdoll_terrain_mode?math.clamp(v.ragdoll_terrain_count,0,${MAX_TERRAIN_BOXES}):t.maxx-t.minx+1):1`, [
            A("t.celly", "t.miny"),
            Loop("t.contact_mode&&!v.ragdoll_terrain_mode?t.maxy-t.miny+1:1", [
              A("t.cellz", "t.minz"),
              Loop("t.contact_mode?(v.ragdoll_terrain_mode?1:t.maxz-t.minz+1):" + SHAPE_PAIRS.length, [
                If("!t.contact_mode?v.simulation_collisions:(v.ragdoll_terrain_mode?1:(" + solid + "))", [
                  A("t.shape", 0),
                  Loop("t.contact_mode?" + SHAPES.length + ":1", [
                    A("t.do_contact", 1),
                    If("!t.contact_mode", SHAPE_PAIRS.length ? [
                      A("t.shape_a", choose("t.pair", SHAPE_PAIRS.map((p) => p[0]))),
                      A("t.shape_b", choose("t.pair", SHAPE_PAIRS.map((p) => p[1]))),
                      loadShape("t.a", "t.shape_a"),
                      loadShape("t.b", "t.shape_b"),
                      A("t.bound_a", choose("t.abody", BODIES.map((_, i) => "v.d" + i + ".minx"))),
                      A("t.bound_b", choose("t.bbody", BODIES.map((_, i) => "v.d" + i + ".minx"))),
                      If("t.bound_a<t.bound_b||(t.bound_a==t.bound_b&&t.abody<t.bbody)", [
                        A("t.sort_lox", "t.bound_a"),
                        A("t.sort_lo", "t.abody"),
                        A("t.sort_hix", "t.bound_b"),
                        A("t.sort_hi", "t.bbody"),
                        swapShapes()
                      ], [A("t.sort_lox", "t.bound_b"), A("t.sort_lo", "t.bbody"), A("t.sort_hix", "t.bound_a"), A("t.sort_hi", "t.abody")])
                    ] : [], [
                      loadShape("t.a", "t.shape"),
                      terrainShape(),
                      basis("t.au", "t.aq"),
                      A("t.do_contact", axes.map((k) => "math.abs(t.a" + k + "-t.b" + k + ")<=t.bh" + k + "+(" + axes.map((l, j) => "math.abs(t.au" + j + k + ")*t.ah" + l).join("+") + ")").join("&&")),
                      If("t.do_contact", [
                        vector("t.bq", [0, 0, 0]),
                        A("t.bqw", 1),
                        A("t.bbody", GROUND),
                        A("t.body_minx", choose("t.abody", BODIES.map((_, i) => "v.d" + i + ".minx"))),
                        A("t.cell_minx", "t.bx-t.bhx"),
                        If("t.cell_minx<t.body_minx", [A("t.sort_lox", "t.cell_minx"), A("t.sort_lo", "t.cell_id"), A("t.sort_hix", "t.body_minx"), A("t.sort_hi", "t.abody")], [
                          A("t.sort_lox", "t.body_minx"),
                          A("t.sort_lo", "t.abody"),
                          A("t.sort_hix", "t.cell_minx"),
                          A("t.sort_hi", "t.cell_id"),
                          swapShapes()
                        ])
                      ])
                    ]),
                    If("t.do_contact", collide()),
                    A("t.shape", "t.shape+1")
                  ])
                ]),
                A("t.pair", "t.pair+1"),
                A("t.cell_id", "t.cell_id+1"),
                A("t.cellz", "t.cellz+1")
              ]),
              A("t.celly", "t.celly+1")
            ]),
            A("t.cellx", "t.cellx+1")
          ]),
          A("t.contact_mode", "t.contact_mode+1")
        ])
      ];
    }
    function separateBodyContacts() {
      if (!SHAPE_PAIRS.length) return [];
      const batches = [];
      for (const pair of SHAPE_PAIRS) {
        let batch = batches.at(-1);
        if (!batch || batch.pairs.length >= 128 || (/* @__PURE__ */ new Set([...batch.indices, ...pair])).size > 24) {
          batch = { pairs: [], indices: [] };
          batches.push(batch);
        }
        batch.pairs.push(pair);
        for (const i of pair) if (!batch.indices.includes(i)) batch.indices.push(i);
      }
      return batches.map(({ pairs, indices }) => [If("v.simulation_collisions", [A("t.pair", 0), Loop(pairs.length, [
        A("t.shape_a", choose("t.pair", pairs.map((p) => indices.indexOf(p[0])))),
        A("t.shape_b", choose("t.pair", pairs.map((p) => indices.indexOf(p[1])))),
        loadShape("t.a", "t.shape_a", indices),
        loadShape("t.b", "t.shape_b", indices),
        A("t.bound_a", choose("t.abody", BODIES.map((_, i) => `v.d${i}minx`))),
        A("t.bound_b", choose("t.bbody", BODIES.map((_, i) => `v.d${i}minx`))),
        If("t.bound_a<t.bound_b || (t.bound_a==t.bound_b && t.abody<t.bbody)", [
          A("t.sort_lox", "t.bound_a"),
          A("t.sort_lo", "t.abody"),
          A("t.sort_hix", "t.bound_b"),
          A("t.sort_hi", "t.bbody"),
          swapShapes()
        ], [A("t.sort_lox", "t.bound_b"), A("t.sort_lo", "t.bbody"), A("t.sort_hix", "t.bound_a"), A("t.sort_hi", "t.abody")]),
        collide(),
        A("t.pair", "t.pair+1")
      ])])]);
    }
    function separateTerrainContacts() {
      const at = "t.cellx-math.floor(v.ex),t.celly-math.floor(v.ey),t.cellz-math.floor(v.ez)";
      const tags = (values) => values.map((value) => `'${value}'`).join(",");
      const solid = `q.relative_block_has_any_tag(${at},${tags(settings2.terrain.includeTags)})${settings2.terrain.excludeTags.length ? `&&!q.relative_block_has_any_tag(${at},${tags(settings2.terrain.excludeTags)})` : ""}`;
      return [
        vector("t.min", [1e6, 1e6, 1e6]),
        vector("t.max", [-1e6, -1e6, -1e6]),
        SHAPES.map((_, i) => [axes.flatMap((k) => [A("t.min" + k, `math.min(t.min${k},v.s${i}${k}-v.s${i}e${k})`), A("t.max" + k, `math.max(t.max${k},v.s${i}${k}+v.s${i}e${k})`)])]),
        axes.flatMap((k) => [A("t.min" + k, `math.floor(v.o${k}+t.min${k}/16)`), A("t.max" + k, `math.floor(v.o${k}+t.max${k}/16)`)]),
        A("v.terrain_minx", "t.minx"),
        A("v.terrain_yz", "(t.maxy-t.miny+1)*(t.maxz-t.minz+1)"),
        A("t.cell_id", GROUND),
        A("t.cellx", "t.minx"),
        Loop(`v.ragdoll_terrain_mode?math.clamp(v.ragdoll_terrain_count,0,${MAX_TERRAIN_BOXES}):t.maxx-t.minx+1`, [A("t.celly", "t.miny"), Loop("v.ragdoll_terrain_mode?1:t.maxy-t.miny+1", [A("t.cellz", "t.minz"), Loop("v.ragdoll_terrain_mode?1:t.maxz-t.minz+1", [
          If("v.ragdoll_terrain_mode?1:(" + solid + ")", [A("t.shape", 0), Loop(SHAPES.length, [
            loadShape("t.a", "t.shape"),
            terrainShape(),
            basis("t.au", "t.aq"),
            If(axes.map((k) => `math.abs(t.a${k}-t.b${k})<=t.bh${k}+(${axes.map((l, j) => `math.abs(t.au${j}${k})*t.ah${l}`).join("+")})`).join("&&"), [
              vector("t.bq", [0, 0, 0]),
              A("t.bqw", 1),
              A("t.bbody", GROUND),
              A("t.body_minx", choose("t.abody", BODIES.map((_, i) => `v.d${i}minx`))),
              A("t.cell_minx", "t.bx-t.bhx"),
              If("t.cell_minx<t.body_minx", [A("t.sort_lox", "t.cell_minx"), A("t.sort_lo", "t.cell_id"), A("t.sort_hix", "t.body_minx"), A("t.sort_hi", "t.abody")], [
                A("t.sort_lox", "t.body_minx"),
                A("t.sort_lo", "t.abody"),
                A("t.sort_hix", "t.cell_minx"),
                A("t.sort_hi", "t.cell_id"),
                swapShapes()
              ]),
              collide()
            ]),
            A("t.shape", "t.shape+1")
          ])]),
          A("t.cell_id", "t.cell_id+1"),
          A("t.cellz", "t.cellz+1")
        ]), A("t.celly", "t.celly+1")]), A("t.cellx", "t.cellx+1")])
      ];
    }
    const separateContacts = SHAPES.length > 24 || CONTACT_LIMIT > 128;
    function bodyContacts() {
      return separateContacts ? separateBodyContacts() : contacts();
    }
    function terrainContacts() {
      return separateContacts ? separateTerrainContacts() : [];
    }
    function sortContacts() {
      const keys2 = ["lox", "lo", "hix", "hi"];
      const loadKey = (out, index) => [
        ...["lo", "hi"].map((k) => A(out + k, choose(index, slots2.map((i) => `v.c${i}${k}`)))),
        ...["lo", "hi"].map((k) => A(out + k + "x", `${out + k}<${GROUND}?(${choose(out + k, BODIES.map((_, i) => `v.d${i}minx`))}):(v.ragdoll_terrain_mode?((${terrainValue(`${out + k}-${GROUND}`, "minx")})-v.ox)*16:((v.terrain_minx+math.floor((${out + k}-${GROUND})/v.terrain_yz)+0.5-v.ox)*16-8))`))
      ];
      const less = keys2.reduceRight((rest, k) => `(t.key_${k}<t.other_${k}||(t.key_${k}==t.other_${k}&&${rest}))`, "0");
      return [A("t.i", 0), Loop("v.contact_count", [
        loadKey("t.key_", "t.i"),
        A("t.insert", "t.i"),
        A("t.moving", 1),
        Loop("t.i", [If("t.moving&&t.insert>0", [
          A("t.previous", choose("t.insert-1", slots2.map((i) => `v.order${i}`))),
          loadKey("t.other_", "t.previous"),
          If(less, [dispatch("t.insert", slots2, (i) => A(`v.order${i}`, "t.previous")), A("t.insert", "t.insert-1")], A("t.moving", 0))
        ])]),
        dispatch("t.insert", slots2, (i) => A(`v.order${i}`, "t.i")),
        A("t.i", "t.i+1")
      ]), pagedContacts ? Array.from({ length: 3 }, (_, group) => {
        const fields = [...contactKeys, "l0", "l1", "l2"].slice(group * 5, group * 5 + 5);
        return [A("t.copy_contact", 0), Loop("v.contact_count", [
          A("t.copy_slot", choose("t.copy_contact", slots2.map((i) => `v.order${i}`))),
          dispatch("t.copy_slot", slots2, (i) => fields.filter((k) => !/^l[012]$/.test(k)).map((k) => A("t.copy_" + k, `v.c${i}.${k}`))),
          dispatch("t.copy_contact", slots2, (i) => fields.map((k) => A(solvedContact(i, k), /^l[012]$/.test(k) ? 0 : "t.copy_" + k))),
          A("t.copy_contact", "t.copy_contact+1")
        ])];
      }) : []];
    }
    function equation(lambda, angular = false) {
      return [
        matrix("t.response_a", "t.da", "t.ga"),
        matrix("t.response_b", "t.db", "t.gb"),
        A("t.denominator", `t.daim+t.dbim+(${dot("t.ga", "t.response_a")})+(${dot("t.gb", "t.response_b")})+t.eps`),
        A("t.gw", `${angular ? "0" : `(${dot("t.n", "t.dbv")})-(${dot("t.n", "t.dav")})`}+(${dot("t.ga", "t.daw")})+(${dot("t.gb", "t.dbw")})`),
        A("t.gdelta", `${angular ? "0" : `(${dot("t.n", "t.dbdv")})-(${dot("t.n", "t.dadv")})`}+(${dot("t.ga", "t.dadw")})+(${dot("t.gb", "t.dbdw")})`),
        A("t.rhs", `-t.g*t.stiff-t.gw*t.relax${angular ? "" : "+t.bounce*math.max(0,-t.gw)"}${angular ? "" : `+(v.ragdoll_simulation_gravity_vector?-(${dot("v.gravity_step_", "t.n")}):${gravityValue(dt)}*t.ny)*((t.dbim>0)-(t.daim>0))`}`),
        A("t.next", `math.clamp(${lambda}+(t.rhs-t.gdelta-t.eps*${lambda})/t.denominator,t.lower,t.upper)`),
        A("t.impulse", `t.next-${lambda}`),
        A(lambda, "t.next"),
        ...!angular ? axes.flatMap((k) => [A("t.dadv" + k, `t.dadv${k}-t.n${k}*t.daim*t.impulse`), A("t.dbdv" + k, `t.dbdv${k}+t.n${k}*t.dbim*t.impulse`)]) : [],
        axes.flatMap((k) => [A("t.dadw" + k, `t.dadw${k}+t.response_a${k}*t.impulse`), A("t.dbdw" + k, `t.dbdw${k}+t.response_b${k}*t.impulse`)])
      ];
    }
    const material = (key2) => {
      const ground = `t.ground_${key2}`;
      const a = choose("t.cia", [...BODIES.map((_, i) => materialValue(rig, i, key2)), ground]), b = choose("t.cib", [...BODIES.map((_, i) => materialValue(rig, i, key2)), ground]);
      return key2 === "restitution" ? `math.max(${a},${b})` : `math.sqrt((${a})*(${b}))`;
    };
    function contactSolve() {
      const prefix = "t.c", friction = "t.phase==0";
      const pages = pagedContacts ? Array.from({ length: Math.ceil(slots2.length / 64) }, (_, i) => slots2.slice(i * 64, i * 64 + 64)) : [slots2];
      return [A("t.phase", rig.contactFriction === false ? 1 : 0), Loop(rig.contactFriction === false ? 1 : 2, [
        If("t.phase==1||v.simulation_friction", pages.map((page) => [A("t.contact_id", page[0]), Loop(pagedContacts ? `math.clamp(v.contact_count-${page[0]},0,${page.length})` : "v.contact_count", [
          A("t.slot", pagedContacts ? "t.contact_id" : choose("t.contact_id", slots2.map((i) => "v.order" + i))),
          dispatch("t.slot", page, (i) => [...contactKeys, "l0", "l1", "l2"].map((k) => A((k === "g" || k.startsWith("ra") || k.startsWith("rb") ? "t." : prefix) + k, solvedContact(i, k))), page[0]),
          A("t.cia", "math.min(t.chi," + GROUND + ")"),
          A("t.cib", "math.min(t.clo," + GROUND + ")"),
          A("t.ground_friction", settings2.terrain.friction),
          A("t.ground_restitution", settings2.terrain.restitution),
          If(`v.ragdoll_terrain_mode&&math.max(t.clo,t.chi)>=${GROUND}`, [
            A("t.material_index", `math.max(t.clo,t.chi)-${GROUND}`),
            ...["friction", "restitution"].map((key2) => A("t.ground_" + key2, terrainValue("t.material_index", key2)))
          ]),
          loadBody("t.da", prefix + "ia"),
          loadBody("t.db", prefix + "ib"),
          A("t.relax", 12 / 13),
          A("t.eps", 4 / (dt * dt * 1e7 * 13)),
          A("t.stiff", friction + "?0:" + 4 / (dt * 13)),
          If(friction, [
            A("t.bounce", 0),
            copy("t.normal", prefix + "n"),
            vector("t.unit", ["math.abs(t.normalx)<0.9?1:0", "math.abs(t.normalx)<0.9?0:1", 0]),
            cross("t.tangent0", "t.normal", "t.unit"),
            cross("t.tangent1", "t.normal", "t.tangent0"),
            A("t.upper", "(" + material("friction") + ")*" + gravityValue() + "/(t.daim+t.dbim)"),
            A("t.lower", "-t.upper")
          ], [A("t.lower", 0), A("t.upper", 1e6)]),
          A("t.tangent_id", friction + "?0:2"),
          Loop(friction + "?2:1", [
            axes.map((k) => A("t.n" + k, choose("t.tangent_id", ["t.tangent0" + k, "t.tangent1" + k, prefix + "n" + k]))),
            cross("t.ga", "t.ra", "t.n"),
            scale("t.ga", "t.ga", -1),
            cross("t.gb", "t.rb", "t.n"),
            If("t.phase==1", A("t.bounce", material("restitution"))),
            A("t.lambda", choose("t.tangent_id", [prefix + "l0", prefix + "l1", prefix + "l2"])),
            equation("t.lambda"),
            dispatch("t.tangent_id", [0, 1, 2], (i) => A(prefix + "l" + i, "t.lambda")),
            A("t.tangent_id", "t.tangent_id+1")
          ]),
          saveDelta("t.da", prefix + "ia"),
          saveDelta("t.db", prefix + "ib"),
          dispatch("t.slot", page, (i) => [0, 1, 2].map((k) => A(solvedContact(i, "l" + k), prefix + "l" + k)), page[0]),
          A("t.contact_id", "t.contact_id+1")
        ])])),
        A("t.phase", "t.phase+1")
      ])];
    }
    function jointSolve() {
      if (!JOINTS.length) return [];
      const ids = rig.jointOrder;
      const pick = (out, values) => A(out, choose("t.joint_id", values));
      return [A("t.joint_id", 0), Loop(ids.length, [
        If(choose("t.joint_id", ids.map((i) => `v.joint_enabled_${i}`)), [
          pick("t.ja", ids.map((i) => JOINTS[i].a)),
          pick("t.jb", ids.map((i) => JOINTS[i].b)),
          A("v.scratch_joint", choose("t.joint_id", ids.map((i) => "v.j" + i))),
          A("t.bounce", 0),
          loadBody("t.da", "t.ja"),
          loadBody("t.db", "t.jb"),
          ...["a", "b"].flatMap((side) => [
            ...axes.map((k) => A("t.local" + k, "v.scratch_joint." + side + k + "*16")),
            ...quat.map((k) => A("t.jq" + k, choose("t.j" + side, BODIES.map((_, i) => "v.b" + i + "q" + k)))),
            rotate("t.r" + side, "t.jq", "t.local")
          ]),
          A("t.relax", 16 / 17),
          A("t.eps", 4 / (1 / 60 * 1 / 60 * 1e7 * 17)),
          A("t.stiff", 240 / 17),
          A("t.lower", -1e6),
          A("t.upper", 1e6),
          A("t.row", 0),
          Loop(3, [
            vector("t.n", axes.map((l, i) => "t.row==" + i)),
            cross("t.ga", "t.ra", "t.n"),
            scale("t.ga", "t.ga", -1),
            cross("t.gb", "t.rb", "t.n"),
            A("t.g", choose("t.row", axes.map((k) => choose("t.jb", BODIES.map((_, i) => "v.d" + i + "." + k)) + "+t.rb" + k + "-(" + choose("t.ja", BODIES.map((_, i) => "v.d" + i + "." + k)) + ")-t.ra" + k))),
            A("t.lambda", choose("t.row", [0, 1, 2].map((i) => "v.scratch_joint.l" + i))),
            equation("t.lambda"),
            dispatch("t.row", [0, 1, 2], (i) => A("v.scratch_joint.l" + i, "t.lambda")),
            A("t.row", "t.row+1")
          ]),
          A("t.upper", 0),
          A("t.twist", 0),
          Loop(2, [
            ...["a", "b"].flatMap((side) => [
              ...axes.map((k, n) => pick("t.local" + k, ids.map((i) => "t.twist?(" + JOINTS[i]["twistAxis" + side.toUpperCase()][n] + "):(" + JOINTS[i]["axis" + side.toUpperCase()][n] + ")"))),
              ...quat.map((k) => A("t.jq" + k, choose("t.j" + side, BODIES.map((_, i) => "v.b" + i + "q" + k)))),
              rotate("t.axis_" + side, "t.jq", "t.local")
            ]),
            cross("t.ga", "t.axis_b", "t.axis_a"),
            cross("t.gb", "t.axis_a", "t.axis_b"),
            pick("t.limit", ids.map((i) => "t.twist?(" + JOINTS[i].twist + "):(" + JOINTS[i].swing + ")")),
            A("t.initial_limit", "t.twist?v.scratch_joint.twist:v.scratch_joint.swing"),
            A("t.g", "math.cos(t.limit+math.max(0,t.initial_limit-t.limit)*math.max(0,1-v.age/" + settings2.poseTransition + "))-(" + dot("t.axis_a", "t.axis_b") + ")"),
            A("t.lambda", "t.twist?v.scratch_joint.l4:v.scratch_joint.l3"),
            equation("t.lambda", true),
            If("t.twist", A("v.scratch_joint.l4", "t.lambda"), A("v.scratch_joint.l3", "t.lambda")),
            A("t.twist", "t.twist+1")
          ]),
          saveDelta("t.da", "t.ja"),
          saveDelta("t.db", "t.jb"),
          dispatch("t.joint_id", ids, (i) => A("v.j" + i, "v.scratch_joint"))
        ]),
        A("t.joint_id", "t.joint_id+1")
      ])];
    }
    function solverChunks() {
      return [A("v.input_iteration", 0), Loop(ITERATIONS, [If(`v.simulation_iterations<=0||v.input_iteration<math.clamp(v.simulation_iterations,1,${ITERATIONS})`, [contactSolve(), JOINTS.length ? jointSolve() : []]), A("v.input_iteration", "v.input_iteration+1")])];
    }
    function integrateBodies() {
      const b = "v.scratch_b.", d = "v.scratch_d.", decay = (value) => typeof value === "number" ? Math.pow(1 - value, dt) : "math.pow(1-(" + value + ")," + dt + ")";
      return [A("t.body_index", 0), Loop(BODIES.length, [
        A("v.scratch_b", choose("t.body_index", BODIES.map((_, i) => "v.b" + i))),
        A("v.scratch_d", choose("t.body_index", BODIES.map((_, i) => "v.d" + i))),
        A("t.linear_decay", choose("t.body_index", BODIES.map((body, i) => `v.ragdoll_property_count?${decay(materialValue(rig, i, "linearDamping"))}:${decay(body.linearDamping)}`))),
        A("t.angular_decay", choose("t.body_index", BODIES.map((body, i) => `v.ragdoll_property_count?${decay(materialValue(rig, i, "angularDamping"))}:${decay(body.angularDamping)}`))),
        axes.map((k) => A(b + "v" + k, "((" + d + "v" + k + "+" + d + "dv" + k + ")*t.linear_decay" + (k === "y" ? `+(v.ragdoll_simulation_gravity_vector?v.gravity_step_y:-${gravityValue(dt)})` : `+v.gravity_step_${k}`) + ")/16")),
        axes.map((k) => A(b + "w" + k, "(" + d + "w" + k + "+" + d + "dw" + k + ")*t.angular_decay")),
        axes.map((k) => A(b + k, b + k + "+" + b + "v" + k + "*" + dt)),
        vector("t.angular", axes.map((k) => b + "w" + k)),
        A("t.angularw", 0),
        multiply("t.change", "t.angular", b + "q"),
        quat.map((k) => A(b + "q" + k, b + "q" + k + "+t.change" + k + "*" + dt / 2)),
        normalize(b + "q", quat),
        dispatch("t.body_index", BODIES, (_, i) => A("v.b" + i, "v.scratch_b")),
        A("t.body_index", "t.body_index+1")
      ])];
    }
    return { initializeDynamics, prepareBodies, bodyContacts, terrainContacts, sortContacts, solverChunks, integrateBodies, jointSolve };
  }

  // src/core/liquids.mjs
  function createLiquids(rig) {
    const bodies = rig.bodies, shapes = rig.shapes, dt = 1 / rig.simulation.frequency;
    const volume = (s) => `((${s.half[0]})*(${s.half[1]})*(${s.half[2]})/512)`;
    const totalVolume = (i) => "(" + shapes.filter((s) => s.body === i).map(volume).join("+") + ")";
    const initialize = bodies.map((_, i) => [A(`v.liquid_fraction_${i}`, 0), A(`v.liquid_region_${i}`, -1)]);
    const step = [
      bodies.map((_, i) => [
        A(`v.liquid_fraction_${i}`, 0),
        A(`v.liquid_region_${i}`, -1),
        A(`v.liquid_mass_${i}`, 0),
        A(`v.liquid_drag_${i}`, 0),
        A(`v.liquid_angular_drag_${i}`, 0),
        vector(`v.liquid_torque_${i}_`, [0, 0, 0])
      ]),
      If("v.ragdoll_liquid_count>0", [
        A("t.fluid_shape", 0),
        Loop(shapes.length, [
          A("t.fluid_body", choose("t.fluid_shape", shapes.map((s) => s.body))),
          axes.map((k) => A("t.fluid_b" + k, choose("t.fluid_body", bodies.map((_, i) => `v.b${i}${k}`)))),
          [...axes, "w"].map((k) => A("t.fluid_bq" + k, choose("t.fluid_body", bodies.map((_, i) => `v.b${i}q${k}`)))),
          A("t.fluid_volume", choose("t.fluid_shape", shapes.map((s) => `${volume(s)}/8`))),
          A("t.fluid_body_volume", choose("t.fluid_body", bodies.map((_, i) => totalVolume(i)))),
          A("t.fluid_sample", 0),
          Loop(8, [
            ...axes.map((k, j) => A("t.fluid_local" + k, choose("t.fluid_shape", shapes.map((s) => `(${s.half[j]})*(math.mod(math.floor(t.fluid_sample/${2 ** j}),2)-0.5)/16`)))),
            ...[...axes, "w"].map((k, j) => A("t.fluid_sq" + k, choose("t.fluid_shape", shapes.map((s) => s.quaternion[j])))),
            rotate("t.fluid_local", "t.fluid_sq", "t.fluid_local"),
            ...axes.map((k, j) => A("t.fluid_local" + k, `t.fluid_local${k}+(${choose("t.fluid_shape", shapes.map((s) => s.center[j]))})/16`)),
            rotate("t.fluid_offset", "t.fluid_bq", "t.fluid_local"),
            ...axes.map((k) => A("t.fluid_point" + k, `v.o${k}+t.fluid_b${k}+t.fluid_offset${k}`)),
            A("t.fluid_index", 0),
            A("t.fluid_found", 0),
            Loop(`math.clamp(v.ragdoll_liquid_count,0,${MAX_LIQUIDS})`, [
              If("!t.fluid_found", [
                dispatch("t.fluid_index", Array.from({ length: MAX_LIQUIDS }, (_, i) => i), (i) => liquidFields.map((k) => A("t.fluid_" + k, `v.ragdoll_liquid_${i}_${k}`))),
                If(axes.map((k) => `t.fluid_point${k}>=t.fluid_min${k}&&t.fluid_point${k}<t.fluid_max${k}`).join("&&"), [
                  A("t.fluid_found", 1),
                  A("v.sleep", 0),
                  axes.map((k) => A("t.fluid_force" + k, `-v.gravity_${k}*t.fluid_density*t.fluid_volume`)),
                  cross("t.fluid_torque", "t.fluid_offset", "t.fluid_force"),
                  dispatch("t.fluid_body", bodies, (_, i) => [
                    A(`v.liquid_fraction_${i}`, `v.liquid_fraction_${i}+t.fluid_volume/t.fluid_body_volume`),
                    A(`v.liquid_region_${i}`, "t.fluid_index"),
                    A(`v.liquid_mass_${i}`, `v.liquid_mass_${i}+t.fluid_density*t.fluid_volume`),
                    A(`v.liquid_drag_${i}`, `v.liquid_drag_${i}+t.fluid_drag*t.fluid_volume/t.fluid_body_volume`),
                    A(`v.liquid_angular_drag_${i}`, `v.liquid_angular_drag_${i}+t.fluid_angulardrag*t.fluid_volume/t.fluid_body_volume`),
                    axes.map((k) => A(`v.liquid_torque_${i}_${k}`, `v.liquid_torque_${i}_${k}+t.fluid_torque${k}`))
                  ])
                ])
              ]),
              A("t.fluid_index", "t.fluid_index+1")
            ]),
            A("t.fluid_sample", "t.fluid_sample+1")
          ]),
          A("t.fluid_shape", "t.fluid_shape+1")
        ]),
        bodies.map((_, i) => If(`v.liquid_fraction_${i}>0`, [
          ...axes.map((k) => A(`v.b${i}v${k}`, `v.b${i}v${k}*math.pow(2.718281828459045,-v.liquid_drag_${i}*${dt})-v.gravity_${k}*v.liquid_mass_${i}/${materialValue(rig, i, "mass")}*${dt}`)),
          scale("t.fluid_inverse", `v.b${i}q`, -1),
          A("t.fluid_inversew", `v.b${i}qw`),
          rotate("t.fluid_spin", "t.fluid_inverse", `v.liquid_torque_${i}_`),
          ...axes.map((k, j) => A("t.fluid_spin" + k, `t.fluid_spin${k}*${inverseInertia(rig, i, j)}*256*${dt}`)),
          rotate("t.fluid_spin", `v.b${i}q`, "t.fluid_spin"),
          ...axes.map((k) => A(`v.b${i}w${k}`, `v.b${i}w${k}*math.pow(2.718281828459045,-v.liquid_angular_drag_${i}*${dt})+t.fluid_spin${k}`))
        ]))
      ])
    ];
    return { initialize, step };
  }

  // src/core/results.mjs
  function createResults(rig, names = []) {
    const requested = new Set(rig.outputs ?? []), references = names.filter((n) => n.startsWith("v.ragdoll_out_"));
    const bodyReferences = new Set(references.flatMap((n) => /^v\.ragdoll_out_body_(\d+)_/.exec(n)?.slice(1).map(Number) ?? []));
    if (references.some((n) => /^v\.ragdoll_out_(active|paused|sleeping|time|center_|min_|max_|body_count)/.test(n))) requested.add("state");
    if (references.some((n) => n.startsWith("v.ragdoll_out_contact_"))) requested.add("contacts");
    if (references.some((n) => n.includes("liquid") || n.includes("submerged"))) requested.add("liquids");
    const initialize = [], frame = [], contacts = [], liquids = [], prefix = "v.ragdoll_out_";
    const declare = (name, value = 0) => initialize.push(A(prefix + name, value));
    const seq = (name) => A(prefix + name, `math.mod(${prefix + name},16777214)+1`);
    if (requested.has("state")) {
      for (const key2 of ["active", "paused", "sleeping", "time", "body_count", ...axes.flatMap((k) => ["center_" + k, "min_" + k, "max_" + k])]) declare(key2, key2 === "body_count" ? rig.bodies.length : 0);
      frame.push(
        A(prefix + "active", "v.active"),
        A(prefix + "paused", "v.active&&(v.ragdoll_control_mode==3||v.ragdoll_simulation_time_scale==0)"),
        A(prefix + "sleeping", `v.active&&v.sleep>=${Math.max(1, Math.round(rig.simulation.sleep.seconds * rig.simulation.frequency))}`),
        A(prefix + "time", "v.age"),
        If("v.active", [
          A("t.result_mass", rig.bodies.map((_, i) => materialValue(rig, i, "mass")).join("+")),
          axes.map((k) => A(prefix + "center_" + k, `v.o${k}+(${rig.bodies.map((_, i) => `v.b${i}${k}*${materialValue(rig, i, "mass")}`).join("+")})/t.result_mass`)),
          vector(prefix + "min_", [1e6, 1e6, 1e6]),
          vector(prefix + "max_", [-1e6, -1e6, -1e6]),
          rig.shapes.map((s) => [
            vector("t.result_local", s.center, 1 / 16),
            rotate("t.result_offset", `v.b${s.body}q`, "t.result_local"),
            ...Array.from({ length: 8 }, (_, i) => [
              vector("t.result_corner", s.half.map((n, k) => `(${n})*${(i & 1 << k ? 1 : -1) / 16}`)),
              vector("t.result_sq", s.quaternion.slice(0, 3)),
              A("t.result_sqw", s.quaternion[3]),
              rotate("t.result_corner", "t.result_sq", "t.result_corner"),
              rotate("t.result_corner", `v.b${s.body}q`, "t.result_corner"),
              ...axes.flatMap((k) => [
                A("t.result_world" + k, `v.o${k}+v.b${s.body}${k}+t.result_offset${k}+t.result_corner${k}`),
                A(prefix + "min_" + k, `math.min(${prefix}min_${k},t.result_world${k})`),
                A(prefix + "max_" + k, `math.max(${prefix}max_${k},t.result_world${k})`)
              ])
            ])
          ])
        ])
      );
    }
    rig.bodies.forEach((_, i) => {
      if (!requested.has("bodies") && !bodyReferences.has(i)) return;
      const out = prefix + `body_${i}_`;
      const fields = [...axes.flatMap((k) => ["position_" + k, "velocity_" + k, "angular_velocity_" + k]), ...quat.map((k) => "rotation_" + k)];
      fields.forEach((k) => declare(`body_${i}_` + k, k === "rotation_w" ? 1 : 0));
      frame.push(If("v.active", [
        ...axes.flatMap((k) => [A(out + "position_" + k, `v.o${k}+v.b${i}${k}`), A(out + "velocity_" + k, `v.b${i}v${k}`), A(out + "angular_velocity_" + k, `v.b${i}w${k}`)]),
        ...quat.map((k) => A(out + "rotation_" + k, `v.b${i}q${k}`))
      ]));
    });
    if (requested.has("contacts")) {
      for (const key2 of ["contact_seq", "contact_count", "contact_overflow", "contact_capacity"]) declare(key2, key2 === "contact_capacity" ? rig.simulation.contactLimit : 0);
      contacts.push(A(prefix + "contact_count", "v.contact_count"), A(prefix + "contact_overflow", "v.contact_overflow"), If("v.contact_count>0", seq("contact_seq")));
      for (let i = 0; i < rig.simulation.contactLimit; i++) {
        const out = prefix + `contact_${i}_`, c = rig.simulation.contactLimit > 128 ? `v.contact_sorted_${i}_` : `v.c${i}`;
        for (const k of ["body_a", "body_b", "impulse", ...axes.flatMap((k2) => ["position_" + k2, "normal_" + k2])]) declare(`contact_${i}_` + k, k.startsWith("body") ? -1 : 0);
        const bodyPosition = (which, k) => rig.bodies.reduceRight((rest, _, j) => `(${which}==${j}?v.d${j}${k}:${rest})`, "0");
        contacts.push(If(`v.contact_count>${i}`, [
          A(out + "body_a", `${c}hi<${rig.bodies.length}?${c}hi:-1`),
          A(out + "body_b", `${c}lo<${rig.bodies.length}?${c}lo:-1`),
          A(out + "impulse", `${c}l2/16`),
          ...axes.flatMap((k) => [A(out + "normal_" + k, `${c}n${k}`), A(out + "position_" + k, `v.o${k}+((${bodyPosition(c + "hi", k)})+${c}ra${k}+(${bodyPosition(c + "lo", k)})+${c}rb${k})/32`)])
        ]));
      }
      frame.push(If("!v.active", A(prefix + "contact_count", 0)));
    }
    if (requested.has("liquids")) {
      declare("liquid_seq");
      declare("liquid_body", -1);
      declare("liquid_entered");
      rig.bodies.forEach((_, i) => {
        declare(`body_${i}_submerged`);
        declare(`body_${i}_liquid_region`, -1);
        declare(`body_${i}_liquid_seq`);
        declare(`body_${i}_liquid_entered`);
        liquids.push(
          If(`(${prefix}body_${i}_submerged>0)!=(v.liquid_fraction_${i}>0)`, [
            seq("liquid_seq"),
            A(prefix + "liquid_body", i),
            A(prefix + "liquid_entered", `v.liquid_fraction_${i}>0`),
            seq(`body_${i}_liquid_seq`),
            A(prefix + `body_${i}_liquid_entered`, `v.liquid_fraction_${i}>0`)
          ]),
          A(prefix + `body_${i}_submerged`, `v.liquid_fraction_${i}`),
          A(prefix + `body_${i}_liquid_region`, `v.liquid_region_${i}`)
        );
      });
    }
    return { initialize, frame, contacts, liquids };
  }

  // src/core/program.mjs
  var quaternion = (out, values) => quat.map((k, i) => A(out + k, values[i]));
  var inverse = (out, q) => [scale(out, q, -1), A(out + "w", q + "w")];
  var reflected = (out, q) => [A(out + "x", `-${q}x`), A(out + "y", `-${q}y`), A(out + "z", q + "z"), A(out + "w", q + "w")];
  function modelQuaternion(out, angles) {
    return [
      axisRotation("t.euler_x", "x", `-(${angles[0]})`),
      axisRotation("t.euler_y", "y", angles[1]),
      axisRotation("t.euler_z", "z", `-(${angles[2]})`),
      multiply("t.euler_xy", "t.euler_y", "t.euler_x"),
      multiply(out, "t.euler_z", "t.euler_xy")
    ];
  }
  function modelEuler(out, q) {
    return [
      A("t.sy", `math.clamp(2*(${q}w*${q}y-${q}z*${q}x),-1,1)`),
      A(out + "y", "math.asin(t.sy)"),
      If("math.abs(t.sy)<0.999999", [
        A(out + "x", `-math.atan2(2*(${q}w*${q}x+${q}y*${q}z),1-2*(${q}x*${q}x+${q}y*${q}y))`),
        A(out + "z", `-math.atan2(2*(${q}w*${q}z+${q}x*${q}y),1-2*(${q}y*${q}y+${q}z*${q}z))`)
      ], [A(out + "x", `-math.atan2(2*(${q}w*${q}x-${q}y*${q}z),1-2*(${q}x*${q}x+${q}z*${q}z))`), A(out + "z", 0)])
    ];
  }
  function anchorPrograms() {
    return {
      initialize: [set("v.anchor_", { ready: 0, tick: -1 }), ...["p", "c", "r"].map((key2) => vector("v.anchor_" + key2, [0, 0, 0]))],
      frame: [
        A("v.anchor_now", "math.floor(q.life_time*20+0.001)"),
        A("v.anchor_alpha", "math.clamp(q.frame_alpha,0,1)"),
        A("v.anchor_reset", "!v.anchor_ready||v.anchor_now<v.anchor_tick||v.anchor_now-v.anchor_tick>1||q.delta_time>0.25||math.abs(v.ex-v.anchor_cx)+math.abs(v.ey-v.anchor_cy)+math.abs(v.ez-v.anchor_cz)>4"),
        If("v.anchor_reset", [copy("v.anchor_p", "v.e"), copy("v.anchor_c", "v.e"), A("v.anchor_tick", "v.anchor_now"), A("v.anchor_ready", 1)]),
        If("v.anchor_now!=v.anchor_tick", [copy("v.anchor_p", "v.anchor_c"), A("v.anchor_tick", "v.anchor_now")]),
        copy("v.anchor_c", "v.e"),
        axes.map((k) => A("v.anchor_r" + k, `math.lerp(v.anchor_p${k},v.anchor_c${k},v.anchor_alpha)`))
      ]
    };
  }
  function poseCapture(rig, normalScale) {
    return [
      A("v.pose_valid", 1),
      A("v.pose_scale", normalScale),
      A("v.pose_yaw", "q.body_y_rotation"),
      rig.bodies.map((body, i) => [
        A("t.bone", `q.bone_orientation_trs('${body.bone}')`),
        axes.map((k) => A(`v.pose${i}t${k}`, `t.bone.t.${k}`)),
        axes.map((k) => A(`v.pose${i}s${k}`, `t.bone.s.${k}`)),
        modelQuaternion(`v.pose${i}q`, axes.map((k) => `t.bone.r.${k}`)),
        If(axes.map((k) => `math.abs(t.bone.s.${k})<0.000001`).join("||"), A("v.pose_valid", 0))
      ])
    ];
  }
  function gaussian(out, amount) {
    return [A("t.random_a", "math.max(0.000001,1-math.random(0,1))"), A("t.random_b", "math.random(0,360)"), A(out, `math.sqrt(-2*math.ln(t.random_a))*math.cos(t.random_b)*${amount}`)];
  }
  function activate(rig) {
    const { bodies, joints, simulation: s } = rig, poseKeys = [...axes, ...quat.map((k) => "q" + k)];
    return [
      set("v.", { active: 1, activated: 1, accum: 0, sleep: 0, tick: 0, age: 0, steps: 0, alpha: 0 }),
      copy("v.o", "v.e"),
      A("v.model_scale", rig.scale),
      axisRotation("t.entityq", "y", "-v.pose_yaw"),
      bodies.map((body, i) => {
        const b = `v.b${i}`, p = `v.pose${i}`;
        return [
          vector("t.center", body.modelCenter.map((n, k) => `((${n})-(${body.pivot[k]}))*${p}s${axes[k]}`)),
          rotate("t.center", p + "q", "t.center"),
          add("t.center", "t.center", p + "t"),
          A("t.centerz", "-t.centerz"),
          scale("t.center", "t.center", "v.pose_scale/16"),
          rotate(b, "t.entityq", "t.center"),
          reflected("t.physicalq", p + "q"),
          multiply(b + "q", "t.entityq", "t.physicalq")
        ];
      }),
      joints.map((j, i) => [
        vector(`v.j${i}base_a`, j.anchorA),
        vector(`v.j${i}base_b`, j.anchorB),
        vector("t.offset", j.transitionAnchorA),
        add(`v.j${i}a`, `v.j${i}base_a`, "t.offset"),
        vector("t.offset", j.transitionAnchorB),
        add(`v.j${i}b`, `v.j${i}base_b`, "t.offset"),
        ...[false, true].map((twist) => [
          vector("t.axis", twist ? j.twistAxisA : j.axisA),
          rotate("t.axis_a", `v.b${j.a}q`, "t.axis"),
          vector("t.axis", twist ? j.twistAxisB : j.axisB),
          rotate("t.axis_b", `v.b${j.b}q`, "t.axis"),
          A(`v.j${i}${twist ? "twist" : "swing"}`, `math.acos(math.clamp(${dot("t.axis_a", "t.axis_b")},-1,1))`)
        ])
      ]),
      gaussian("t.spin_xa", s.initialSpin),
      gaussian("t.spin_ya", s.initialSpin),
      gaussian("t.spin_xb", s.initialSpin),
      gaussian("t.spin_yb", s.initialSpin),
      vector("v.spin", ["(t.spin_xa+t.spin_xb)*3.141592653589793", "(t.spin_ya+t.spin_yb)*3.141592653589793", 0]),
      bodies.map((body, i) => {
        const b = `v.b${i}`;
        return [
          copy(b + "prev", b, poseKeys),
          copy(b + "old", b, poseKeys),
          axes.map((k, j) => A(b + "v" + k, `v.input_${k}*${s.initialVelocity[j]}`)),
          scale(b + "w", "v.spin", i === 0 ? 2 : `math.min(1,(${body.mass})/(${bodies[0].mass}))`)
        ];
      })
    ];
  }
  function interpolatedBodies(rig) {
    return rig.bodies.map((_, i) => {
      const b = `v.b${i}`;
      return [
        axes.map((k) => A(`v.render${i}${k}`, `${b}prev${k}+(${b}${k}-${b}prev${k})*v.alpha`)),
        A("t.sign", `(${dot(b + "q", b + "prevq", quat)})<0?-1:1`),
        quat.map((k) => A("t.q" + k, `${b}prevq${k}+(${b}q${k}*t.sign-${b}prevq${k})*v.alpha`)),
        normalize("t.q", quat),
        copy(`v.render${i}q`, "t.q", quat)
      ];
    });
  }
  function boneOutput(rig, index) {
    const body = rig.bodies[index], parent = body.parent;
    const transform = (i, out) => [
      axisRotation("t.entity_inverse", "y", "q.body_y_rotation"),
      axes.map((k) => A("t.center" + k, `v.o${k}-v.anchor_r${k}+v.render${i}${k}`)),
      rotate(out + "c", "t.entity_inverse", "t.center"),
      scale(out + "c", out + "c", "16/v.model_scale"),
      A(out + "cz", `-${out}cz`),
      multiply("t.physicalq", "t.entity_inverse", `v.render${i}q`),
      reflected(out + "q", "t.physicalq"),
      vector("t.bind_center", rig.bodies[i].modelCenter),
      rotate("t.bind_center", out + "q", "t.bind_center"),
      sub(out + "t", out + "c", "t.bind_center")
    ];
    return [
      transform(index, "t.body_"),
      ...parent >= 0 ? transform(parent, "t.parent_") : [quaternion("t.parent_q", [0, 0, 0, 1]), vector("t.parent_t", [0, 0, 0])],
      vector("t.chain_t", body.parentTransform.t),
      rotate("t.chain_t", "t.parent_q", "t.chain_t"),
      add("t.parent_t", "t.parent_t", "t.chain_t"),
      quaternion("t.chain_q", body.parentTransform.q),
      multiply("t.parent_q", "t.parent_q", "t.chain_q"),
      inverse("t.parent_inverse", "t.parent_q"),
      sub("t.local_center", "t.body_c", "t.parent_t"),
      rotate("t.local_center", "t.parent_inverse", "t.local_center"),
      multiply("t.local_q", "t.parent_inverse", "t.body_q"),
      vector("t.pivot", body.pivot),
      vector("t.offset", body.modelCenter.map((n, k) => `(${n})-(${body.pivot[k]})`)),
      rotate("t.offset", "t.local_q", "t.offset"),
      axes.map((k) => A(`v.out${index}p${k}`, `t.local_center${k}-t.pivot${k}-t.offset${k}`)),
      modelEuler(`v.out${index}r`, "t.local_q"),
      axes.map((k, j) => A(`v.out${index}r${k}`, `v.out${index}r${k}-(${body.bindRotation[j]})`))
    ];
  }
  function createProgram(rig, { preview = false, reservedNames = [] } = {}) {
    const s = rig.simulation, dt = 1 / s.frequency, anchor = anchorPrograms(), d = createDynamics(rig, s), input = createInputs(rig), liquids = createLiquids(rig), results = createResults(rig, reservedNames), poseKeys = [...axes, ...quat.map((k) => "q" + k)];
    let variant = String(rig.variants.length - 1);
    for (let i = rig.variants.length - 2; i >= 0; i--) variant = `(${rig.variants[i].when})?${i}:(${variant})`;
    let initialize = [
      set("v.", { active: 0, activated: 0, variant: 0, accum: 0, sleep: 0, tick: 0, age: 0, steps: 0, alpha: 0, has_position: 0, pose_valid: 0, frames: 0, model_scale: 1 }),
      vector("v.last_", [0, 0, 0]),
      anchor.initialize,
      input.initialize,
      liquids.initialize,
      results.initialize,
      rig.bodies.map((_, i) => [
        set(`v.b${i}`, Object.fromEntries([...poseKeys, ...poseKeys.map((k) => "prev" + k), ...poseKeys.map((k) => "old" + k), ...axes.flatMap((k) => ["v" + k, "w" + k])].map((k) => [k, k.endsWith("qw") ? 1 : 0]))),
        vector(`v.render${i}`, [0, 0, 0]),
        quaternion(`v.render${i}q`, [0, 0, 0, 1])
      ]),
      d.initializeDynamics()
    ];
    const begin = [
      axes.map((k, i) => A("v.e" + k, `q.position(${i})`)),
      anchor.frame,
      A("v.steps", 0),
      A("v.activated", 0),
      axes.map((k) => A("v.input_" + k, `v.has_position?(v.e${k}-v.last_${k})/math.max(q.delta_time,0.001):0`)),
      copy("v.last_", "v.e"),
      A("v.has_position", 1),
      input.frame,
      If(`v.active&&(v.ragdoll_control_mode==2||(v.ragdoll_control_mode==0&&(${rig.release})))`, [A("v.active", 0), A("v.accum", 0), A("v.pose_valid", 0), A("v.frames", 0)]),
      If("!v.active", [
        A("v.variant", variant),
        If("v.frames>0", poseCapture(rig, rig.scale)),
        If(`(v.ragdoll_control_mode==1||v.ragdoll_control_mode==3||(v.ragdoll_control_mode==0&&(${rig.trigger})))&&v.pose_valid`, activate(rig)),
        A("v.frames", "v.frames+1")
      ]),
      input.properties,
      input.motion,
      If("v.active&&!v.activated&&v.ragdoll_control_mode!=3&&v.ragdoll_simulation_time_scale>0", [A("v.accum", `math.min(v.accum+math.max(q.delta_time,0)*math.clamp(v.ragdoll_simulation_time_scale,0,2),${dt * 3})`), A("v.steps", `math.floor(v.accum*${s.frequency}+0.00001)`), A("v.accum", `math.max(0,v.accum-v.steps*${dt})`), A("v.alpha", `math.clamp(v.accum*${s.frequency},0,1)`)])
    ];
    const sleepTicks = Math.max(1, Math.round(s.sleep.seconds * s.frequency)), checkTicks = Math.max(1, Math.round(s.sleep.checkInterval * s.frequency));
    const tick = [
      A("v.tick", "v.tick+1"),
      A("v.age", `v.age+${dt}`),
      rig.bodies.map((_, i) => copy(`v.b${i}prev`, `v.b${i}`, poseKeys)),
      input.forces,
      liquids.step,
      results.liquids,
      A("v.was_sleeping", `v.sleep>=${sleepTicks}`),
      A("v.awake", `v.sleep<${sleepTicks}||math.mod(v.tick,${checkTicks})==0`)
    ];
    const finish = [
      A("t.motion", rig.bodies.map((_, i) => `(${dot(`v.b${i}v`, `v.b${i}v`)})`).reduce((a, b) => `math.max(${a},${b})`)),
      A("v.sleep", `v.support&&t.motion<${s.sleep.speed ** 2}?math.min(${sleepTicks},v.sleep+1):math.max(0,v.sleep-1/3)`),
      If(`v.sleep>=${sleepTicks}`, rig.bodies.map((_, i) => [vector(`v.b${i}v`, [0, 0, 0]), vector(`v.b${i}w`, [0, 0, 0]), If("v.was_sleeping", copy(`v.b${i}`, `v.b${i}prev`, poseKeys), copy(`v.b${i}prev`, `v.b${i}`, poseKeys))]))
    ];
    const anchors = rig.joints.map((j, i) => [...["A", "B"].map((side) => axes.map((k, n) => A(`v.j${i}${side.toLowerCase()}${k}`, `v.j${i}base_${side.toLowerCase()}${k}+(${j["transitionAnchor" + side][n]})*math.max(0,1-v.age/${s.poseTransition})`)))]);
    const dynamics = [[anchors, d.prepareBodies()], d.bodyContacts(), d.terrainContacts(), d.sortContacts(), ...d.solverChunks(), results.contacts, d.integrateBodies(), finish];
    let frameBlocks = [
      compactBegin(rig, begin, poseCapture(rig, rig.scale), activate(rig)),
      ...Array.from({ length: 3 }, (_, i) => [If("v.active&&v.steps>" + i, [tick, If("v.awake", dynamics)])]),
      [If("v.active", [interpolatedBodies(rig), compactOutput(rig, boneOutput)]), results.frame]
    ];
    let rootOutputs = rig.bodies.map((_, i) => boneOutput(rig, i));
    const lowered = lowerRecords({ initialize: groupVariables(initialize), frame: frameBlocks.map(groupVariables), rootOutputs: rootOutputs.map(groupVariables) });
    initialize = lowered.initialize;
    frameBlocks = lowered.frame;
    rootOutputs = lowered.rootOutputs;
    if (preview) return { initialize, frameChunks: frameBlocks, rootOutputs };
    const frequencyText = emit([initialize, frameBlocks, rig.bodies.flatMap((b, i) => b.parent < 0 ? Array.from({ length: 6 }, () => rootOutputs[i]) : [])]);
    const assigned = /* @__PURE__ */ new Set();
    const visit = (nodes) => {
      for (const n of nodes.flat(Infinity)) {
        if (n.kind === "set") assigned.add(n.name);
        if (n.kind === "if") {
          visit(n.yes);
          visit(n.no);
        }
        if (n.kind === "loop") visit(n.body);
      }
    };
    visit([initialize, frameBlocks, rootOutputs]);
    const external = [...frequencyText.matchAll(/(?<![\w.])v\.\w+/g)].map((m) => m[0]).filter((name) => !assigned.has(name));
    const namespace = minifier({ frequencyText, reservedNames, externalNames: external });
    const source2 = (nodes, target = "molang") => target === "molang" ? namespace(emit(nodes)) : emit(nodes, target);
    const initializeChunks = splitStatements(initialize, source2, { prefix: "init" });
    const frameChunks = frameBlocks.flatMap((nodes, i) => splitStatements(nodes, source2, { prefix: `chunk${i}` }));
    const animation = (target = "molang") => ({ loop: true, override_previous_animation: true, bones: Object.fromEntries(rig.bodies.map((body, i) => [body.bone, {
      position: axes.map((k) => {
        const value = target === "molang" ? namespace(`v.out${i}p${k}`) : `v.out${i}p${k}`;
        return body.parent < 0 ? `${source2(rootOutputs[i], target)}return ${value};` : value;
      }),
      rotation: axes.map((k) => {
        const value = target === "molang" ? namespace(`v.out${i}r${k}`) : `v.out${i}r${k}`;
        return body.parent < 0 ? `${source2(rootOutputs[i], target)}return ${value};` : value;
      }),
      scale: [1, 1, 1]
    }])) });
    return { initialize, frameChunks, rootOutputs, source: source2, animation, names: namespace.roots, initializeSources: initializeChunks.map((nodes) => source2(nodes)), frameSources: frameChunks.map((nodes) => source2(nodes)) };
  }
  var testMath = {
    ...Object.fromEntries(["sqrt", "abs", "min", "max", "floor", "ln", "pow"].map((k) => [k, k === "ln" ? Math.log : Math[k]])),
    random: (a, b) => a + (b - a) * Math.random(),
    sin: (x) => Math.sin(x * Math.PI / 180),
    cos: (x) => Math.cos(x * Math.PI / 180),
    acos: (x) => Math.acos(x) * 180 / Math.PI,
    asin: (x) => Math.asin(x) * 180 / Math.PI,
    atan2: (y, x) => Math.atan2(y, x) * 180 / Math.PI,
    clamp: (v, a, b) => Math.min(b, Math.max(a, v)),
    mod: (a, b) => a % b,
    lerp: (a, b, t2) => a + (b - a) * t2
  };

  // src/export.js
  function adaptClient(original, rig, program, id) {
    const result = clone(original), c = result["minecraft:client_entity"].description, s = c.scripts ??= {};
    const animations = { ...c.animations }, animate = [...s.animate ?? []];
    for (const [i, entry] of (c.animation_controllers ?? []).entries()) for (const [name, value] of Object.entries(entry)) {
      const alias2 = `ragdoll_original_${i}_${name}`;
      animations[alias2] = value;
      animate.push(alias2);
    }
    const key2 = "ragdoll_generated";
    if (key2 in animations) fail("alias", [key2]);
    if ("ragdoll_input" in animations) fail("alias", ["ragdoll_input"]);
    animations[key2] = id;
    animations.ragdoll_input = INPUT_ANIMATION;
    delete c.animation_controllers;
    c.animations = animations;
    const atLeast = (version, min) => version.split(".").map(Number).reduce((a, n, i) => a || Math.sign(n - (min[i] ?? 0)), 0) < 0 ? min.join(".") : version;
    result.format_version = atLeast(String(result.format_version ?? "1.10.0"), [1, 20, 60]);
    c.min_engine_version = atLeast(String(c.min_engine_version ?? "1.10.0"), [1, 26, 0]);
    const alias = (g) => Object.entries(c.geometry).find(([, value]) => value === g)?.[0];
    let query = `geometry.${alias(rig.variants.at(-1).geometry)}`;
    for (let i = rig.variants.length - 2; i >= 0; i--) query = `(${rig.variants[i].when})?geometry.${alias(rig.variants[i].geometry)}:(${query})`;
    c.queryable_geometry = query;
    const condition = (entry) => typeof entry === "string" ? { [entry]: "!v.ragdoll_active" } : Object.fromEntries(Object.entries(entry).map(([name, value]) => [name, `(!v.ragdoll_active)*(${typeof value === "boolean" ? Number(value) : value})`]));
    c.scripts = { ...s, initialize: [...s.initialize ?? [], ...program.initializeSources], pre_animation: [...s.pre_animation ?? [], ...program.frameSources], animate: [...animate.map(condition), { [key2]: "v.ragdoll_active" }], should_update_bones_and_effects_offscreen: true };
    return result;
  }
  function resourceVariables(resources, original) {
    const names = new Set(resources.reservedVariables ?? []);
    for (const value of [...resources.json?.values() ?? [], original].filter(Boolean)) for (const [name] of JSON.stringify(value).matchAll(/\b(?:v|variable)\.\w+/gi)) names.add(name.toLowerCase().replace(/^variable\./, "v."));
    return [...names];
  }
  function generateEntity(resources, config, original) {
    const client = original["minecraft:client_entity"].description, rig = outputModel(config, resources, client);
    const program = createProgram(rig, { reservedNames: resourceVariables(resources, original) }), name = client.identifier.replaceAll(":", "_"), animationId = `animation.ragdoll.${name}`;
    const definition = JSON.stringify(adaptClient(original, rig, program, animationId));
    return { rig, program, name, animationId, definition, bytes: new TextEncoder().encode(definition).byteLength };
  }
  async function estimateOutputLevels(resources, config, original, { cancelled = () => false, update = () => {
  } } = {}) {
    const levels = [], seen = /* @__PURE__ */ new Map();
    for (const level of [...OUTPUT_LEVELS].reverse()) {
      await new Promise((resolve) => setTimeout(resolve, 0));
      if (cancelled()) return;
      const model = { ...config, outputLevel: level }, rig = outputModel(model, resources, original["minecraft:client_entity"].description);
      const signature = JSON.stringify([rig.simulation, rig.shapePairs, rig.contactFriction]);
      if (seen.has(signature)) {
        seen.get(signature).levels.push(level);
        update(levels.map((entry2) => ({ ...entry2, levels: [...entry2.levels] })).reverse());
        continue;
      }
      const { bytes } = generateEntity(resources, model, original);
      const entry = { level, bytes, levels: [level] };
      seen.set(signature, entry);
      levels.push(entry);
      update(levels.map((entry2) => ({ ...entry2, levels: [...entry2.levels] })).reverse());
    }
    return levels.reverse();
  }
  async function generatePack(resources, rows, options, Zip, onProgress = () => {
  }) {
    const selected = rows.filter((r) => r.selected);
    if (!selected.length) fail("selection");
    const zip = new Zip(), reports = [], updates = /* @__PURE__ */ new Map();
    const set2 = (path, value) => updates.set(path, JSON.stringify(value));
    set2("animations/simple_ragdoll_input.animation.json", { format_version: "1.8.0", animations: { [INPUT_ANIMATION]: { loop: true, animation_length: 1 } } });
    for (const [index, row] of selected.entries()) {
      onProgress(row.id, index, selected.length);
      await new Promise((resolve) => setTimeout(resolve, 0));
      if (!row.config) fail("not_configured", [row.id]);
      const record = resources.clients.get(row.id);
      if (!record) fail("entity_missing", [row.id]);
      if (/v\.(ragdoll_|rg[a-z0-9]+\b)/.test(JSON.stringify(record.value))) fail("already_generated", [row.id]);
      const { rig, program, name, animationId, definition, bytes } = generateEntity(resources, row.config, record.value);
      if (resources.animations.has(animationId)) fail("alias", [animationId]);
      updates.set(record.file, definition);
      set2(`animations/ragdoll_${name}.animation.json`, { format_version: "1.20.60", animations: { [animationId]: program.animation() } });
      reports.push({ id: row.id, bodies: rig.bodies.length, boxes: rig.shapes.length, joints: rig.joints.length, bytes });
    }
    const manifest = clone(resources.json.get("manifest.json") ?? { format_version: 2, header: {}, modules: [] });
    const originalMinimum = manifest.header?.min_engine_version ?? [0, 0, 0];
    const minimum = originalMinimum.reduce((comparison, n, i) => comparison || Math.sign(n - ([1, 26, 0][i] ?? 0)), 0) > 0 ? originalMinimum : [1, 26, 0];
    manifest.header = { ...manifest.header, name: options.name, description: options.name, uuid: options.uuid ?? crypto.randomUUID(), version: [1, 0, 0], min_engine_version: minimum };
    manifest.modules = [{ type: "resources", uuid: crypto.randomUUID(), version: [1, 0, 0] }];
    set2("manifest.json", manifest);
    const decoder = new TextDecoder();
    for (const [path, bytes] of resources.files) if (/\.json$/i.test(path) && !updates.has(path)) {
      try {
        set2(path, resources.json.get(path) ?? parseJson(typeof bytes === "string" ? bytes : decoder.decode(bytes), path));
      } catch {
      }
    }
    for (const [path, bytes] of resources.files) zip.file(path, bytes);
    for (const [path, text] of updates) zip.file(path, text);
    const data = await zip.generateAsync({ type: "uint8array", compression: "DEFLATE", compressionOptions: { level: 6 } });
    return { data, reports, updates };
  }

  // src/preview/simulation.js
  function createSimulation(config, resources, client, poses) {
    const model = structuredClone(config);
    model.trigger = "q.health<q.max_health";
    model.release = "0";
    const rig = outputModel(model, resources, client), program = createProgram(rig, { preview: true }), compile = executor({ indexed: true });
    let seed = 12345;
    const q = {
      health: 20,
      max_health: 20,
      is_baby: 0,
      body_y_rotation: 0,
      delta_time: 0,
      life_time: 0,
      frame_alpha: 1,
      position: () => 0,
      bone_orientation_trs: (name) => poses[name],
      relative_block_has_any_tag: (_x, y, _z, ...tags) => Number(y < 0 && !tags.some((t2) => t2 === "water" || t2 === "lava"))
    };
    const scope = { v: {}, t: {}, q, c: {}, math: { ...testMath, random: (a, b) => {
      seed = Math.imul(seed, 1664525) + 1013904223 >>> 0;
      return a + (b - a) * seed / 4294967296;
    } } };
    const initialize = compile(program.initialize), steps = program.frameChunks.map(compile), roots2 = rig.bodies.map((body, i) => body.parent < 0 ? compile(program.rootOutputs[i]) : null);
    compile.prepare(scope);
    const step = (dt) => {
      q.delta_time = dt;
      q.life_time += dt;
      for (const run of steps) {
        compile.resetTemps(scope);
        run(scope);
      }
      for (const run of roots2) if (run) {
        compile.resetTemps(scope);
        run(scope);
      }
    };
    initialize(scope);
    step(0);
    q.health = 19;
    step(0);
    return { rig, scope, step, transforms() {
      return rig.bodies.map((body, i) => ({ bone: body.bone, position: ["x", "y", "z"].map((k) => scope.v[`out${i}p${k}`]), rotation: ["x", "y", "z"].map((k) => scope.v[`out${i}r${k}`]) }));
    } };
  }

  // src/preview/transforms.js
  function capturePose(groups, root, Three) {
    root.updateMatrixWorld(true);
    const inverse2 = new Three.Matrix4().copy(root.matrixWorld).invert(), poses = {};
    for (const group of groups) {
      const matrix = new Three.Matrix4().multiplyMatrices(inverse2, group.mesh.matrixWorld), position = new Three.Vector3(), rotation = new Three.Quaternion(), scale3 = new Three.Vector3();
      matrix.decompose(position, rotation, scale3);
      if (Math.min(scale3.x, scale3.y, scale3.z) <= 0 || Math.max(scale3.x, scale3.y, scale3.z) - Math.min(scale3.x, scale3.y, scale3.z) > 1e-5) fail("nonuniform");
      const [x, y, z, w] = [rotation.x, -rotation.y, -rotation.z, rotation.w], sy = Math.max(-1, Math.min(1, 2 * (w * y - z * x))), k = 180 / Math.PI;
      const r = Math.abs(sy) < 0.999999 ? [-Math.atan2(2 * (w * x + y * z), 1 - 2 * (x * x + y * y)) * k, Math.asin(sy) * k, -Math.atan2(2 * (w * z + x * y), 1 - 2 * (y * y + z * z)) * k] : [-Math.atan2(2 * (w * x - y * z), 1 - 2 * (x * x + z * z)) * k, Math.asin(sy) * k, 0];
      poses[group.name] = { t: { x: -position.x, y: position.y, z: position.z }, r: { x: r[0], y: r[1], z: r[2] }, s: { x: scale3.x, y: scale3.y, z: scale3.z } };
    }
    return poses;
  }
  function applyTransforms(groups, transforms) {
    const byName = new Map(groups.map((g) => [g.name, g]));
    for (const state of transforms) {
      const mesh = byName.get(state.bone)?.mesh;
      if (!mesh) continue;
      const base = mesh.fix_position, rotation = mesh.fix_rotation;
      mesh.position.copy(base);
      mesh.position.x -= state.position[0];
      mesh.position.y += state.position[1];
      mesh.position.z += state.position[2];
      mesh.rotation.copy(rotation);
      mesh.rotation.x -= state.rotation[0] * Math.PI / 180;
      mesh.rotation.y -= state.rotation[1] * Math.PI / 180;
      mesh.rotation.z += state.rotation[2] * Math.PI / 180;
      mesh.scale.set(1, 1, 1);
      mesh.updateMatrix();
    }
  }

  // src/blockbench/preview.js
  var Preview2 = class {
    constructor(changed, onError) {
      this.changed = changed;
      this.onError = onError;
      this.running = false;
      this.state = null;
      this.handle = 0;
    }
    async play(context) {
      const mode = Modes.selected?.id;
      if (!["ragdoll", "animate"].includes(mode) || !context) return;
      if (this.running) {
        this.running = false;
        cancelAnimationFrame(this.handle);
        this.changed();
        return;
      }
      if (!this.state) {
        const groups = Group.all.slice(), root = Project.model_3d ?? groups.find((g) => !(g.parent instanceof Group))?.mesh.parent;
        if (!root) return;
        const config = variantConfig(context.config, context.variant);
        Timeline.pause();
        if (mode !== "animate") {
          Animator.showDefaultPose();
          root.updateMatrixWorld(true);
        }
        const saved = groups.map((group) => ({ mesh: group.mesh, position: group.mesh.position.clone(), rotation: group.mesh.quaternion.clone(), scale: group.mesh.scale.clone() }));
        const project = Project, time = Timeline.time, poses = capturePose(groups, root, THREE);
        await new Promise((resolve) => setTimeout(resolve, 0));
        if (Project !== project || Modes.selected?.id !== mode) return;
        const simulation = createSimulation(config, context.resources, context.client, poses);
        this.state = { groups, root, saved, time, mode, simulation, project: Project };
        this.draw();
      }
      this.running = true;
      this.last = performance.now();
      this.changed();
      this.handle = requestAnimationFrame((time) => this.frame(time));
    }
    frame(time) {
      if (!this.running) return;
      try {
        if (Project !== this.state.project || Modes.selected?.id !== this.state.mode) {
          this.reset();
          return;
        }
        Timeline.pause();
        this.state.simulation.step(Math.min((time - this.last) / 1e3, 0.15));
        this.last = time;
        this.draw();
        this.handle = requestAnimationFrame((next) => this.frame(next));
      } catch (error) {
        this.reset();
        this.onError(error);
      }
    }
    draw() {
      if (!this.state) return;
      Animator.showDefaultPose(true);
      applyTransforms(this.state.groups, this.state.simulation.transforms());
      this.state.root.updateMatrixWorld(true);
    }
    reset() {
      cancelAnimationFrame(this.handle);
      this.running = false;
      if (this.state) {
        const state = this.state;
        this.state = null;
        if (Project === state.project) {
          Timeline.pause();
          Timeline.setTime(state.time);
          if (Modes.selected?.id === "animate") Animator.preview();
        }
        for (const saved of state.saved) {
          const mesh = saved.mesh;
          mesh.position.copy(saved.position);
          mesh.quaternion.copy(saved.rotation);
          mesh.scale.copy(saved.scale);
          mesh.updateMatrix();
        }
        state.root.updateMatrixWorld(true);
        if (Project === state.project && ["edit", "ragdoll"].includes(Modes.selected?.id)) {
          Animator.showDefaultPose();
          state.root.updateMatrixWorld(true);
        }
      }
      this.changed();
    }
  };

  // src/blockbench/overlay.js
  var COLOR = { shape: 6797807, chosen: 16765286, joint: 15830948, mismatch: 16751421, center: 16765286, swing: 8443511, twist: 15830948 };
  var mirror = (p) => [-p[0], p[1], p[2]];
  var threeQuaternion = (q) => new THREE.Quaternion(q[0], -q[1], -q[2], q[3]);
  var Overlay = class {
    constructor() {
      this.nodes = [];
      this.picks = [];
    }
    clear() {
      for (const node of this.nodes) {
        node.removeFromParent();
        node.traverse((child) => {
          child.geometry?.dispose();
          if (Array.isArray(child.material)) child.material.forEach((m) => m.dispose());
          else child.material?.dispose();
        });
      }
      this.nodes = [];
      this.picks = [];
    }
    add(group, node, order = 10) {
      node.renderOrder = order;
      node.traverse((c) => {
        c.renderOrder = order;
        if (c.material) {
          c.material.depthTest = false;
          c.material.transparent = true;
        }
      });
      group.mesh.add(node);
      this.nodes.push(node);
      return node;
    }
    // Bone-local model coordinates relative to the group mesh; group.origin is already in Blockbench coordinates.
    local(group, p) {
      return mirror(p).map((n, i) => n - group.origin[i]);
    }
    draw(config, info, variant, selected) {
      this.clear();
      const groups = new Map(Group.all.map((g) => [g.name, g]));
      for (const [id, body] of Object.entries(info.bodies)) {
        const group = groups.get(body.bone);
        if (!group) continue;
        const bodySelected = selected.type === "body" && selected.body === id;
        body.shapes.forEach((box, index) => {
          const chosen = bodySelected || selected.type === "shape" && selected.body === id && selected.index === index;
          const geometry = new THREE.BoxGeometry(...box.size), edges = new THREE.EdgesGeometry(geometry);
          geometry.dispose();
          const node = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: chosen ? COLOR.chosen : COLOR.shape, opacity: chosen ? 0.95 : 0.55 }));
          node.position.fromArray(this.local(group, shapePosition(box)));
          node.quaternion.copy(threeQuaternion(modelRotation(box.rotation ?? [0, 0, 0])));
          this.add(group, node, chosen ? 12 : 10);
          this.picks.push({ type: "shape", node, half: box.size.map((n) => n / 2), body: id, index });
        });
        if (bodySelected) this.add(group, this.marker(this.local(group, body.center), COLOR.center, 0.3), 13);
      }
      for (const id of Object.keys(config.joints)) {
        const frame = jointFrame(config, info, variant, id), group = frame && groups.get(frame.bone);
        if (!group) continue;
        const chosen = selected.type === "joint" && selected.joint === id, position = this.local(group, frame.position);
        const node = this.add(group, this.marker(position, frame.mismatch ? COLOR.mismatch : COLOR.joint, chosen ? 0.4 : 0.25), chosen ? 14 : 11);
        this.picks.push({ type: "joint", node, joint: id });
        if (!chosen) continue;
        this.add(group, this.limits(frame, position), 13);
        if (frame.mismatch) {
          const other = groups.get(frame.ends.a.body.bone);
          if (other) this.add(other, this.marker(this.local(other, frame.ends.a.local), COLOR.mismatch, 0.2), 14);
        }
      }
    }
    marker(position, color, radius) {
      const node = new THREE.Mesh(new THREE.SphereGeometry(radius, 8, 6), new THREE.MeshBasicMaterial({ color }));
      node.position.fromArray(position);
      return node;
    }
    // Swing cone around the frame Y axis and the twist range around the reference direction.
    limits(frame, position) {
      const { swing, twist } = frame.ends.joint, root = new THREE.Object3D(), length = 3, s = (swing ?? 45) * Math.PI / 180, w = (twist ?? 22.5) * Math.PI / 180;
      root.position.fromArray(position);
      root.quaternion.copy(threeQuaternion(frame.quaternion));
      const line = (points, color, segments = false) => {
        const g = new THREE.BufferGeometry().setFromPoints(points), m = new THREE.LineBasicMaterial({ color, opacity: 0.8 });
        return segments ? new THREE.LineSegments(g, m) : new THREE.Line(g, m);
      };
      const rim = [], spokes = [];
      for (let i = 0; i <= 48; i++) {
        const a = i / 48 * Math.PI * 2;
        rim.push(new THREE.Vector3(Math.cos(a) * Math.sin(s) * length, Math.cos(s) * length, Math.sin(a) * Math.sin(s) * length));
      }
      for (let i = 0; i < 4; i++) spokes.push(new THREE.Vector3(), rim[i * 12]);
      const arc = [new THREE.Vector3()];
      for (let i = 0; i <= 16; i++) {
        const a = -w + 2 * w * i / 16;
        arc.push(new THREE.Vector3(Math.cos(a) * length * 0.8, 0, Math.sin(a) * length * 0.8));
      }
      arc.push(new THREE.Vector3());
      root.add(line(rim, COLOR.swing), line(spokes, COLOR.swing, true), line(arc, COLOR.twist));
      root.add(new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(), length * 1.2, COLOR.swing, 0.6, 0.3));
      root.add(new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(), length, COLOR.twist, 0.5, 0.25));
      return root;
    }
    // Joints win within a few pixels; otherwise the nearest collision box under the pointer.
    pick(preview, x, y) {
      if (!this.picks.length) return null;
      const camera = preview.camera, raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(new THREE.Vector2(x, y), camera);
      const rect = preview.canvas.getBoundingClientRect();
      let joint = null, best = 12;
      for (const pick of this.picks) {
        if (pick.type !== "joint") continue;
        const p = pick.node.getWorldPosition(new THREE.Vector3()).project(camera);
        if (p.z > 1) continue;
        const d = Math.hypot((p.x - x) * rect.width / 2, (p.y - y) * rect.height / 2);
        if (d < best) {
          best = d;
          joint = pick;
        }
      }
      if (joint) return { joint: joint.joint };
      let hit = null, distance = Infinity;
      for (const pick of this.picks) {
        if (pick.type !== "shape") continue;
        pick.node.updateWorldMatrix(true, false);
        const ray = raycaster.ray.clone().applyMatrix4(new THREE.Matrix4().copy(pick.node.matrixWorld).invert());
        const point = ray.intersectBox(new THREE.Box3(new THREE.Vector3(...pick.half.map((n) => -n)), new THREE.Vector3(...pick.half)), new THREE.Vector3());
        if (!point) continue;
        const d = point.applyMatrix4(pick.node.matrixWorld).distanceTo(raycaster.ray.origin);
        if (d < distance) {
          distance = d;
          hit = pick;
        }
      }
      return hit && { body: hit.body, index: hit.index };
    }
  };

  // src/vendor/transform-controls.js
  var {
    BoxGeometry,
    BufferGeometry,
    Color,
    CylinderGeometry,
    DoubleSide,
    Euler,
    Float32BufferAttribute,
    Line,
    LineBasicMaterial,
    Matrix4,
    Mesh,
    MeshBasicMaterial,
    Object3D,
    OctahedronGeometry,
    PlaneGeometry,
    Quaternion,
    Raycaster,
    SphereGeometry,
    TorusGeometry,
    Vector3
  } = globalThis.THREE;
  var _raycaster = new Raycaster();
  var _tempVector = new Vector3();
  var _tempVector2 = new Vector3();
  var _tempQuaternion = new Quaternion();
  var _unit = {
    X: new Vector3(1, 0, 0),
    Y: new Vector3(0, 1, 0),
    Z: new Vector3(0, 0, 1)
  };
  var _changeEvent = { type: "change" };
  var _mouseDownEvent = { type: "mouseDown" };
  var _mouseUpEvent = { type: "mouseUp", mode: null };
  var _objectChangeEvent = { type: "objectChange" };
  var TransformControls = class extends Object3D {
    constructor(camera, domElement) {
      super();
      if (domElement === void 0) {
        console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.');
        domElement = document;
      }
      this.visible = false;
      this.domElement = domElement;
      const _gizmo = new TransformControlsGizmo();
      this._gizmo = _gizmo;
      this.add(_gizmo);
      const _plane = new TransformControlsPlane();
      this._plane = _plane;
      this.add(_plane);
      const scope = this;
      function defineProperty(propName, defaultValue) {
        let propValue = defaultValue;
        Object.defineProperty(scope, propName, {
          get: function() {
            return propValue !== void 0 ? propValue : defaultValue;
          },
          set: function(value) {
            if (propValue !== value) {
              propValue = value;
              _plane[propName] = value;
              _gizmo[propName] = value;
              scope.dispatchEvent({ type: propName + "-changed", value });
              scope.dispatchEvent(_changeEvent);
            }
          }
        });
        scope[propName] = defaultValue;
        _plane[propName] = defaultValue;
        _gizmo[propName] = defaultValue;
      }
      defineProperty("camera", camera);
      defineProperty("object", void 0);
      defineProperty("enabled", true);
      defineProperty("axis", null);
      defineProperty("mode", "translate");
      defineProperty("translationSnap", null);
      defineProperty("rotationSnap", null);
      defineProperty("scaleSnap", null);
      defineProperty("space", "world");
      defineProperty("size", 1);
      defineProperty("dragging", false);
      defineProperty("showX", true);
      defineProperty("showY", true);
      defineProperty("showZ", true);
      const worldPosition = new Vector3();
      const worldPositionStart = new Vector3();
      const worldQuaternion = new Quaternion();
      const worldQuaternionStart = new Quaternion();
      const cameraPosition = new Vector3();
      const cameraQuaternion = new Quaternion();
      const pointStart = new Vector3();
      const pointEnd = new Vector3();
      const rotationAxis = new Vector3();
      const rotationAngle = 0;
      const eye = new Vector3();
      defineProperty("worldPosition", worldPosition);
      defineProperty("worldPositionStart", worldPositionStart);
      defineProperty("worldQuaternion", worldQuaternion);
      defineProperty("worldQuaternionStart", worldQuaternionStart);
      defineProperty("cameraPosition", cameraPosition);
      defineProperty("cameraQuaternion", cameraQuaternion);
      defineProperty("pointStart", pointStart);
      defineProperty("pointEnd", pointEnd);
      defineProperty("rotationAxis", rotationAxis);
      defineProperty("rotationAngle", rotationAngle);
      defineProperty("eye", eye);
      this._offset = new Vector3();
      this._startNorm = new Vector3();
      this._endNorm = new Vector3();
      this._cameraScale = new Vector3();
      this._parentPosition = new Vector3();
      this._parentQuaternion = new Quaternion();
      this._parentQuaternionInv = new Quaternion();
      this._parentScale = new Vector3();
      this._worldScaleStart = new Vector3();
      this._worldQuaternionInv = new Quaternion();
      this._worldScale = new Vector3();
      this._positionStart = new Vector3();
      this._quaternionStart = new Quaternion();
      this._scaleStart = new Vector3();
      this._getPointer = getPointer.bind(this);
      this._onPointerDown = onPointerDown.bind(this);
      this._onPointerHover = onPointerHover.bind(this);
      this._onPointerMove = onPointerMove.bind(this);
      this._onPointerUp = onPointerUp.bind(this);
      this.domElement.addEventListener("pointerdown", this._onPointerDown);
      this.domElement.addEventListener("pointermove", this._onPointerHover);
      this.domElement.ownerDocument.addEventListener("pointerup", this._onPointerUp);
    }
    // updateMatrixWorld  updates key transformation variables
    updateMatrixWorld() {
      if (this.object !== void 0) {
        this.object.updateMatrixWorld();
        if (this.object.parent === null) {
          console.error("TransformControls: The attached 3D object must be a part of the scene graph.");
        } else {
          this.object.parent.matrixWorld.decompose(this._parentPosition, this._parentQuaternion, this._parentScale);
        }
        this.object.matrixWorld.decompose(this.worldPosition, this.worldQuaternion, this._worldScale);
        this._parentQuaternionInv.copy(this._parentQuaternion).invert();
        this._worldQuaternionInv.copy(this.worldQuaternion).invert();
      }
      this.camera.updateMatrixWorld();
      this.camera.matrixWorld.decompose(this.cameraPosition, this.cameraQuaternion, this._cameraScale);
      this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize();
      super.updateMatrixWorld(this);
    }
    pointerHover(pointer) {
      if (this.object === void 0 || this.dragging === true) return;
      _raycaster.setFromCamera(pointer, this.camera);
      const intersect = intersectObjectWithRay(this._gizmo.picker[this.mode], _raycaster);
      if (intersect) {
        this.axis = intersect.object.name;
      } else {
        this.axis = null;
      }
    }
    pointerDown(pointer) {
      if (this.object === void 0 || this.dragging === true || pointer.button !== 0) return;
      if (this.axis !== null) {
        _raycaster.setFromCamera(pointer, this.camera);
        const planeIntersect = intersectObjectWithRay(this._plane, _raycaster, true);
        if (planeIntersect) {
          let space = this.space;
          if (this.mode === "scale") {
            space = "local";
          } else if (this.axis === "E" || this.axis === "XYZE" || this.axis === "XYZ") {
            space = "world";
          }
          if (space === "local" && this.mode === "rotate") {
            const snap = this.rotationSnap;
            if (this.axis === "X" && snap) this.object.rotation.x = Math.round(this.object.rotation.x / snap) * snap;
            if (this.axis === "Y" && snap) this.object.rotation.y = Math.round(this.object.rotation.y / snap) * snap;
            if (this.axis === "Z" && snap) this.object.rotation.z = Math.round(this.object.rotation.z / snap) * snap;
          }
          this.object.updateMatrixWorld();
          this.object.parent.updateMatrixWorld();
          this._positionStart.copy(this.object.position);
          this._quaternionStart.copy(this.object.quaternion);
          this._scaleStart.copy(this.object.scale);
          this.object.matrixWorld.decompose(this.worldPositionStart, this.worldQuaternionStart, this._worldScaleStart);
          this.pointStart.copy(planeIntersect.point).sub(this.worldPositionStart);
        }
        this.dragging = true;
        _mouseDownEvent.mode = this.mode;
        this.dispatchEvent(_mouseDownEvent);
      }
    }
    pointerMove(pointer) {
      const axis2 = this.axis;
      const mode = this.mode;
      const object = this.object;
      let space = this.space;
      if (mode === "scale") {
        space = "local";
      } else if (axis2 === "E" || axis2 === "XYZE" || axis2 === "XYZ") {
        space = "world";
      }
      if (object === void 0 || axis2 === null || this.dragging === false || pointer.button !== -1) return;
      _raycaster.setFromCamera(pointer, this.camera);
      const planeIntersect = intersectObjectWithRay(this._plane, _raycaster, true);
      if (!planeIntersect) return;
      this.pointEnd.copy(planeIntersect.point).sub(this.worldPositionStart);
      if (mode === "translate") {
        this._offset.copy(this.pointEnd).sub(this.pointStart);
        if (space === "local" && axis2 !== "XYZ") {
          this._offset.applyQuaternion(this._worldQuaternionInv);
        }
        if (axis2.indexOf("X") === -1) this._offset.x = 0;
        if (axis2.indexOf("Y") === -1) this._offset.y = 0;
        if (axis2.indexOf("Z") === -1) this._offset.z = 0;
        if (space === "local" && axis2 !== "XYZ") {
          this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale);
        } else {
          this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale);
        }
        object.position.copy(this._offset).add(this._positionStart);
        if (this.translationSnap) {
          if (space === "local") {
            object.position.applyQuaternion(_tempQuaternion.copy(this._quaternionStart).invert());
            if (axis2.search("X") !== -1) {
              object.position.x = Math.round(object.position.x / this.translationSnap) * this.translationSnap;
            }
            if (axis2.search("Y") !== -1) {
              object.position.y = Math.round(object.position.y / this.translationSnap) * this.translationSnap;
            }
            if (axis2.search("Z") !== -1) {
              object.position.z = Math.round(object.position.z / this.translationSnap) * this.translationSnap;
            }
            object.position.applyQuaternion(this._quaternionStart);
          }
          if (space === "world") {
            if (object.parent) {
              object.position.add(_tempVector.setFromMatrixPosition(object.parent.matrixWorld));
            }
            if (axis2.search("X") !== -1) {
              object.position.x = Math.round(object.position.x / this.translationSnap) * this.translationSnap;
            }
            if (axis2.search("Y") !== -1) {
              object.position.y = Math.round(object.position.y / this.translationSnap) * this.translationSnap;
            }
            if (axis2.search("Z") !== -1) {
              object.position.z = Math.round(object.position.z / this.translationSnap) * this.translationSnap;
            }
            if (object.parent) {
              object.position.sub(_tempVector.setFromMatrixPosition(object.parent.matrixWorld));
            }
          }
        }
      } else if (mode === "scale") {
        if (axis2.search("XYZ") !== -1) {
          let d = this.pointEnd.length() / this.pointStart.length();
          if (this.pointEnd.dot(this.pointStart) < 0) d *= -1;
          _tempVector2.set(d, d, d);
        } else {
          _tempVector.copy(this.pointStart);
          _tempVector2.copy(this.pointEnd);
          _tempVector.applyQuaternion(this._worldQuaternionInv);
          _tempVector2.applyQuaternion(this._worldQuaternionInv);
          _tempVector2.divide(_tempVector);
          if (axis2.search("X") === -1) {
            _tempVector2.x = 1;
          }
          if (axis2.search("Y") === -1) {
            _tempVector2.y = 1;
          }
          if (axis2.search("Z") === -1) {
            _tempVector2.z = 1;
          }
        }
        object.scale.copy(this._scaleStart).multiply(_tempVector2);
        if (this.scaleSnap) {
          if (axis2.search("X") !== -1) {
            object.scale.x = Math.round(object.scale.x / this.scaleSnap) * this.scaleSnap || this.scaleSnap;
          }
          if (axis2.search("Y") !== -1) {
            object.scale.y = Math.round(object.scale.y / this.scaleSnap) * this.scaleSnap || this.scaleSnap;
          }
          if (axis2.search("Z") !== -1) {
            object.scale.z = Math.round(object.scale.z / this.scaleSnap) * this.scaleSnap || this.scaleSnap;
          }
        }
      } else if (mode === "rotate") {
        this._offset.copy(this.pointEnd).sub(this.pointStart);
        const ROTATION_SPEED = 20 / this.worldPosition.distanceTo(_tempVector.setFromMatrixPosition(this.camera.matrixWorld));
        if (axis2 === "E") {
          this.rotationAxis.copy(this.eye);
          this.rotationAngle = this.pointEnd.angleTo(this.pointStart);
          this._startNorm.copy(this.pointStart).normalize();
          this._endNorm.copy(this.pointEnd).normalize();
          this.rotationAngle *= this._endNorm.cross(this._startNorm).dot(this.eye) < 0 ? 1 : -1;
        } else if (axis2 === "XYZE") {
          this.rotationAxis.copy(this._offset).cross(this.eye).normalize();
          this.rotationAngle = this._offset.dot(_tempVector.copy(this.rotationAxis).cross(this.eye)) * ROTATION_SPEED;
        } else if (axis2 === "X" || axis2 === "Y" || axis2 === "Z") {
          this.rotationAxis.copy(_unit[axis2]);
          _tempVector.copy(_unit[axis2]);
          if (space === "local") {
            _tempVector.applyQuaternion(this.worldQuaternion);
          }
          this.rotationAngle = this._offset.dot(_tempVector.cross(this.eye).normalize()) * ROTATION_SPEED;
        }
        if (this.rotationSnap) this.rotationAngle = Math.round(this.rotationAngle / this.rotationSnap) * this.rotationSnap;
        if (space === "local" && axis2 !== "E" && axis2 !== "XYZE") {
          object.quaternion.copy(this._quaternionStart);
          object.quaternion.multiply(_tempQuaternion.setFromAxisAngle(this.rotationAxis, this.rotationAngle)).normalize();
        } else {
          this.rotationAxis.applyQuaternion(this._parentQuaternionInv);
          object.quaternion.copy(_tempQuaternion.setFromAxisAngle(this.rotationAxis, this.rotationAngle));
          object.quaternion.multiply(this._quaternionStart).normalize();
        }
      }
      this.dispatchEvent(_changeEvent);
      this.dispatchEvent(_objectChangeEvent);
    }
    pointerUp(pointer) {
      if (pointer.button !== 0) return;
      if (this.dragging && this.axis !== null) {
        _mouseUpEvent.mode = this.mode;
        this.dispatchEvent(_mouseUpEvent);
      }
      this.dragging = false;
      this.axis = null;
    }
    dispose() {
      this.domElement.removeEventListener("pointerdown", this._onPointerDown);
      this.domElement.removeEventListener("pointermove", this._onPointerHover);
      this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove);
      this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp);
      this.traverse(function(child) {
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      });
    }
    // Set current object
    attach(object) {
      this.object = object;
      this.visible = true;
      return this;
    }
    // Detatch from object
    detach() {
      this.object = void 0;
      this.visible = false;
      this.axis = null;
      return this;
    }
    // TODO: deprecate
    getMode() {
      return this.mode;
    }
    setMode(mode) {
      this.mode = mode;
    }
    setTranslationSnap(translationSnap) {
      this.translationSnap = translationSnap;
    }
    setRotationSnap(rotationSnap) {
      this.rotationSnap = rotationSnap;
    }
    setScaleSnap(scaleSnap) {
      this.scaleSnap = scaleSnap;
    }
    setSize(size) {
      this.size = size;
    }
    setSpace(space) {
      this.space = space;
    }
    update() {
      console.warn("THREE.TransformControls: update function has no more functionality and therefore has been deprecated.");
    }
  };
  TransformControls.prototype.isTransformControls = true;
  function getPointer(event) {
    if (this.domElement.ownerDocument.pointerLockElement) {
      return {
        x: 0,
        y: 0,
        button: event.button
      };
    } else {
      const pointer = event.changedTouches ? event.changedTouches[0] : event;
      const rect = this.domElement.getBoundingClientRect();
      return {
        x: (pointer.clientX - rect.left) / rect.width * 2 - 1,
        y: -(pointer.clientY - rect.top) / rect.height * 2 + 1,
        button: event.button
      };
    }
  }
  function onPointerHover(event) {
    if (!this.enabled) return;
    switch (event.pointerType) {
      case "mouse":
      case "pen":
        this.pointerHover(this._getPointer(event));
        break;
    }
  }
  function onPointerDown(event) {
    if (!this.enabled) return;
    this.domElement.style.touchAction = "none";
    this.domElement.ownerDocument.addEventListener("pointermove", this._onPointerMove);
    this.pointerHover(this._getPointer(event));
    this.pointerDown(this._getPointer(event));
  }
  function onPointerMove(event) {
    if (!this.enabled) return;
    this.pointerMove(this._getPointer(event));
  }
  function onPointerUp(event) {
    if (!this.enabled) return;
    this.domElement.style.touchAction = "";
    this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove);
    this.pointerUp(this._getPointer(event));
  }
  function intersectObjectWithRay(object, raycaster, includeInvisible) {
    const allIntersections = raycaster.intersectObject(object, true);
    for (let i = 0; i < allIntersections.length; i++) {
      if (allIntersections[i].object.visible || includeInvisible) {
        return allIntersections[i];
      }
    }
    return false;
  }
  var _tempEuler = new Euler();
  var _alignVector = new Vector3(0, 1, 0);
  var _zeroVector = new Vector3(0, 0, 0);
  var _lookAtMatrix = new Matrix4();
  var _tempQuaternion2 = new Quaternion();
  var _identityQuaternion = new Quaternion();
  var _dirVector = new Vector3();
  var _tempMatrix = new Matrix4();
  var _unitX = new Vector3(1, 0, 0);
  var _unitY = new Vector3(0, 1, 0);
  var _unitZ = new Vector3(0, 0, 1);
  var _v1 = new Vector3();
  var _v2 = new Vector3();
  var _v3 = new Vector3();
  var TransformControlsGizmo = class extends Object3D {
    constructor() {
      super();
      this.type = "TransformControlsGizmo";
      const gizmoMaterial = new MeshBasicMaterial({
        depthTest: false,
        depthWrite: false,
        transparent: true,
        side: DoubleSide,
        fog: false,
        toneMapped: false
      });
      const gizmoLineMaterial = new LineBasicMaterial({
        depthTest: false,
        depthWrite: false,
        transparent: true,
        linewidth: 1,
        fog: false,
        toneMapped: false
      });
      const matInvisible = gizmoMaterial.clone();
      matInvisible.opacity = 0.15;
      const matHelper = gizmoMaterial.clone();
      matHelper.opacity = 0.33;
      const matRed = gizmoMaterial.clone();
      matRed.color.set(16711680);
      const matGreen = gizmoMaterial.clone();
      matGreen.color.set(65280);
      const matBlue = gizmoMaterial.clone();
      matBlue.color.set(255);
      const matWhiteTransparent = gizmoMaterial.clone();
      matWhiteTransparent.opacity = 0.25;
      const matYellowTransparent = matWhiteTransparent.clone();
      matYellowTransparent.color.set(16776960);
      const matCyanTransparent = matWhiteTransparent.clone();
      matCyanTransparent.color.set(65535);
      const matMagentaTransparent = matWhiteTransparent.clone();
      matMagentaTransparent.color.set(16711935);
      const matYellow = gizmoMaterial.clone();
      matYellow.color.set(16776960);
      const matLineRed = gizmoLineMaterial.clone();
      matLineRed.color.set(16711680);
      const matLineGreen = gizmoLineMaterial.clone();
      matLineGreen.color.set(65280);
      const matLineBlue = gizmoLineMaterial.clone();
      matLineBlue.color.set(255);
      const matLineCyan = gizmoLineMaterial.clone();
      matLineCyan.color.set(65535);
      const matLineMagenta = gizmoLineMaterial.clone();
      matLineMagenta.color.set(16711935);
      const matLineYellow = gizmoLineMaterial.clone();
      matLineYellow.color.set(16776960);
      const matLineGray = gizmoLineMaterial.clone();
      matLineGray.color.set(7895160);
      const matLineYellowTransparent = matLineYellow.clone();
      matLineYellowTransparent.opacity = 0.25;
      const arrowGeometry = new CylinderGeometry(0, 0.05, 0.2, 12, 1, false);
      const scaleHandleGeometry = new BoxGeometry(0.125, 0.125, 0.125);
      const lineGeometry = new BufferGeometry();
      lineGeometry.setAttribute("position", new Float32BufferAttribute([0, 0, 0, 1, 0, 0], 3));
      function CircleGeometry(radius, arc) {
        const geometry = new BufferGeometry();
        const vertices = [];
        for (let i = 0; i <= 64 * arc; ++i) {
          vertices.push(0, Math.cos(i / 32 * Math.PI) * radius, Math.sin(i / 32 * Math.PI) * radius);
        }
        geometry.setAttribute("position", new Float32BufferAttribute(vertices, 3));
        return geometry;
      }
      function TranslateHelperGeometry() {
        const geometry = new BufferGeometry();
        geometry.setAttribute("position", new Float32BufferAttribute([0, 0, 0, 1, 1, 1], 3));
        return geometry;
      }
      const gizmoTranslate = {
        X: [
          [new Mesh(arrowGeometry, matRed), [1, 0, 0], [0, 0, -Math.PI / 2], null, "fwd"],
          [new Mesh(arrowGeometry, matRed), [1, 0, 0], [0, 0, Math.PI / 2], null, "bwd"],
          [new Line(lineGeometry, matLineRed)]
        ],
        Y: [
          [new Mesh(arrowGeometry, matGreen), [0, 1, 0], null, null, "fwd"],
          [new Mesh(arrowGeometry, matGreen), [0, 1, 0], [Math.PI, 0, 0], null, "bwd"],
          [new Line(lineGeometry, matLineGreen), null, [0, 0, Math.PI / 2]]
        ],
        Z: [
          [new Mesh(arrowGeometry, matBlue), [0, 0, 1], [Math.PI / 2, 0, 0], null, "fwd"],
          [new Mesh(arrowGeometry, matBlue), [0, 0, 1], [-Math.PI / 2, 0, 0], null, "bwd"],
          [new Line(lineGeometry, matLineBlue), null, [0, -Math.PI / 2, 0]]
        ],
        XYZ: [
          [new Mesh(new OctahedronGeometry(0.1, 0), matWhiteTransparent.clone()), [0, 0, 0], [0, 0, 0]]
        ],
        XY: [
          [new Mesh(new PlaneGeometry(0.295, 0.295), matYellowTransparent.clone()), [0.15, 0.15, 0]],
          [new Line(lineGeometry, matLineYellow), [0.18, 0.3, 0], null, [0.125, 1, 1]],
          [new Line(lineGeometry, matLineYellow), [0.3, 0.18, 0], [0, 0, Math.PI / 2], [0.125, 1, 1]]
        ],
        YZ: [
          [new Mesh(new PlaneGeometry(0.295, 0.295), matCyanTransparent.clone()), [0, 0.15, 0.15], [0, Math.PI / 2, 0]],
          [new Line(lineGeometry, matLineCyan), [0, 0.18, 0.3], [0, 0, Math.PI / 2], [0.125, 1, 1]],
          [new Line(lineGeometry, matLineCyan), [0, 0.3, 0.18], [0, -Math.PI / 2, 0], [0.125, 1, 1]]
        ],
        XZ: [
          [new Mesh(new PlaneGeometry(0.295, 0.295), matMagentaTransparent.clone()), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]],
          [new Line(lineGeometry, matLineMagenta), [0.18, 0, 0.3], null, [0.125, 1, 1]],
          [new Line(lineGeometry, matLineMagenta), [0.3, 0, 0.18], [0, -Math.PI / 2, 0], [0.125, 1, 1]]
        ]
      };
      const pickerTranslate = {
        X: [
          [new Mesh(new CylinderGeometry(0.2, 0, 1, 4, 1, false), matInvisible), [0.6, 0, 0], [0, 0, -Math.PI / 2]]
        ],
        Y: [
          [new Mesh(new CylinderGeometry(0.2, 0, 1, 4, 1, false), matInvisible), [0, 0.6, 0]]
        ],
        Z: [
          [new Mesh(new CylinderGeometry(0.2, 0, 1, 4, 1, false), matInvisible), [0, 0, 0.6], [Math.PI / 2, 0, 0]]
        ],
        XYZ: [
          [new Mesh(new OctahedronGeometry(0.2, 0), matInvisible)]
        ],
        XY: [
          [new Mesh(new PlaneGeometry(0.4, 0.4), matInvisible), [0.2, 0.2, 0]]
        ],
        YZ: [
          [new Mesh(new PlaneGeometry(0.4, 0.4), matInvisible), [0, 0.2, 0.2], [0, Math.PI / 2, 0]]
        ],
        XZ: [
          [new Mesh(new PlaneGeometry(0.4, 0.4), matInvisible), [0.2, 0, 0.2], [-Math.PI / 2, 0, 0]]
        ]
      };
      const helperTranslate = {
        START: [
          [new Mesh(new OctahedronGeometry(0.01, 2), matHelper), null, null, null, "helper"]
        ],
        END: [
          [new Mesh(new OctahedronGeometry(0.01, 2), matHelper), null, null, null, "helper"]
        ],
        DELTA: [
          [new Line(TranslateHelperGeometry(), matHelper), null, null, null, "helper"]
        ],
        X: [
          [new Line(lineGeometry, matHelper.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]
        ],
        Y: [
          [new Line(lineGeometry, matHelper.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]
        ],
        Z: [
          [new Line(lineGeometry, matHelper.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]
        ]
      };
      const gizmoRotate = {
        X: [
          [new Line(CircleGeometry(1, 0.5), matLineRed)],
          [new Mesh(new OctahedronGeometry(0.04, 0), matRed), [0, 0, 0.99], null, [1, 3, 1]]
        ],
        Y: [
          [new Line(CircleGeometry(1, 0.5), matLineGreen), null, [0, 0, -Math.PI / 2]],
          [new Mesh(new OctahedronGeometry(0.04, 0), matGreen), [0, 0, 0.99], null, [3, 1, 1]]
        ],
        Z: [
          [new Line(CircleGeometry(1, 0.5), matLineBlue), null, [0, Math.PI / 2, 0]],
          [new Mesh(new OctahedronGeometry(0.04, 0), matBlue), [0.99, 0, 0], null, [1, 3, 1]]
        ],
        E: [
          [new Line(CircleGeometry(1.25, 1), matLineYellowTransparent), null, [0, Math.PI / 2, 0]],
          [new Mesh(new CylinderGeometry(0.03, 0, 0.15, 4, 1, false), matLineYellowTransparent), [1.17, 0, 0], [0, 0, -Math.PI / 2], [1, 1, 1e-3]],
          [new Mesh(new CylinderGeometry(0.03, 0, 0.15, 4, 1, false), matLineYellowTransparent), [-1.17, 0, 0], [0, 0, Math.PI / 2], [1, 1, 1e-3]],
          [new Mesh(new CylinderGeometry(0.03, 0, 0.15, 4, 1, false), matLineYellowTransparent), [0, -1.17, 0], [Math.PI, 0, 0], [1, 1, 1e-3]],
          [new Mesh(new CylinderGeometry(0.03, 0, 0.15, 4, 1, false), matLineYellowTransparent), [0, 1.17, 0], [0, 0, 0], [1, 1, 1e-3]]
        ],
        XYZE: [
          [new Line(CircleGeometry(1, 1), matLineGray), null, [0, Math.PI / 2, 0]]
        ]
      };
      const helperRotate = {
        AXIS: [
          [new Line(lineGeometry, matHelper.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]
        ]
      };
      const pickerRotate = {
        X: [
          [new Mesh(new TorusGeometry(1, 0.1, 4, 24), matInvisible), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2]]
        ],
        Y: [
          [new Mesh(new TorusGeometry(1, 0.1, 4, 24), matInvisible), [0, 0, 0], [Math.PI / 2, 0, 0]]
        ],
        Z: [
          [new Mesh(new TorusGeometry(1, 0.1, 4, 24), matInvisible), [0, 0, 0], [0, 0, -Math.PI / 2]]
        ],
        E: [
          [new Mesh(new TorusGeometry(1.25, 0.1, 2, 24), matInvisible)]
        ],
        XYZE: [
          [new Mesh(new SphereGeometry(0.7, 10, 8), matInvisible)]
        ]
      };
      const gizmoScale = {
        X: [
          [new Mesh(scaleHandleGeometry, matRed), [0.8, 0, 0], [0, 0, -Math.PI / 2]],
          [new Line(lineGeometry, matLineRed), null, null, [0.8, 1, 1]]
        ],
        Y: [
          [new Mesh(scaleHandleGeometry, matGreen), [0, 0.8, 0]],
          [new Line(lineGeometry, matLineGreen), null, [0, 0, Math.PI / 2], [0.8, 1, 1]]
        ],
        Z: [
          [new Mesh(scaleHandleGeometry, matBlue), [0, 0, 0.8], [Math.PI / 2, 0, 0]],
          [new Line(lineGeometry, matLineBlue), null, [0, -Math.PI / 2, 0], [0.8, 1, 1]]
        ],
        XY: [
          [new Mesh(scaleHandleGeometry, matYellowTransparent), [0.85, 0.85, 0], null, [2, 2, 0.2]],
          [new Line(lineGeometry, matLineYellow), [0.855, 0.98, 0], null, [0.125, 1, 1]],
          [new Line(lineGeometry, matLineYellow), [0.98, 0.855, 0], [0, 0, Math.PI / 2], [0.125, 1, 1]]
        ],
        YZ: [
          [new Mesh(scaleHandleGeometry, matCyanTransparent), [0, 0.85, 0.85], null, [0.2, 2, 2]],
          [new Line(lineGeometry, matLineCyan), [0, 0.855, 0.98], [0, 0, Math.PI / 2], [0.125, 1, 1]],
          [new Line(lineGeometry, matLineCyan), [0, 0.98, 0.855], [0, -Math.PI / 2, 0], [0.125, 1, 1]]
        ],
        XZ: [
          [new Mesh(scaleHandleGeometry, matMagentaTransparent), [0.85, 0, 0.85], null, [2, 0.2, 2]],
          [new Line(lineGeometry, matLineMagenta), [0.855, 0, 0.98], null, [0.125, 1, 1]],
          [new Line(lineGeometry, matLineMagenta), [0.98, 0, 0.855], [0, -Math.PI / 2, 0], [0.125, 1, 1]]
        ],
        XYZX: [
          [new Mesh(new BoxGeometry(0.125, 0.125, 0.125), matWhiteTransparent.clone()), [1.1, 0, 0]]
        ],
        XYZY: [
          [new Mesh(new BoxGeometry(0.125, 0.125, 0.125), matWhiteTransparent.clone()), [0, 1.1, 0]]
        ],
        XYZZ: [
          [new Mesh(new BoxGeometry(0.125, 0.125, 0.125), matWhiteTransparent.clone()), [0, 0, 1.1]]
        ]
      };
      const pickerScale = {
        X: [
          [new Mesh(new CylinderGeometry(0.2, 0, 0.8, 4, 1, false), matInvisible), [0.5, 0, 0], [0, 0, -Math.PI / 2]]
        ],
        Y: [
          [new Mesh(new CylinderGeometry(0.2, 0, 0.8, 4, 1, false), matInvisible), [0, 0.5, 0]]
        ],
        Z: [
          [new Mesh(new CylinderGeometry(0.2, 0, 0.8, 4, 1, false), matInvisible), [0, 0, 0.5], [Math.PI / 2, 0, 0]]
        ],
        XY: [
          [new Mesh(scaleHandleGeometry, matInvisible), [0.85, 0.85, 0], null, [3, 3, 0.2]]
        ],
        YZ: [
          [new Mesh(scaleHandleGeometry, matInvisible), [0, 0.85, 0.85], null, [0.2, 3, 3]]
        ],
        XZ: [
          [new Mesh(scaleHandleGeometry, matInvisible), [0.85, 0, 0.85], null, [3, 0.2, 3]]
        ],
        XYZX: [
          [new Mesh(new BoxGeometry(0.2, 0.2, 0.2), matInvisible), [1.1, 0, 0]]
        ],
        XYZY: [
          [new Mesh(new BoxGeometry(0.2, 0.2, 0.2), matInvisible), [0, 1.1, 0]]
        ],
        XYZZ: [
          [new Mesh(new BoxGeometry(0.2, 0.2, 0.2), matInvisible), [0, 0, 1.1]]
        ]
      };
      const helperScale = {
        X: [
          [new Line(lineGeometry, matHelper.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]
        ],
        Y: [
          [new Line(lineGeometry, matHelper.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]
        ],
        Z: [
          [new Line(lineGeometry, matHelper.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]
        ]
      };
      function setupGizmo(gizmoMap) {
        const gizmo = new Object3D();
        for (const name in gizmoMap) {
          for (let i = gizmoMap[name].length; i--; ) {
            const object = gizmoMap[name][i][0].clone();
            const position = gizmoMap[name][i][1];
            const rotation = gizmoMap[name][i][2];
            const scale3 = gizmoMap[name][i][3];
            const tag = gizmoMap[name][i][4];
            object.name = name;
            object.tag = tag;
            if (position) {
              object.position.set(position[0], position[1], position[2]);
            }
            if (rotation) {
              object.rotation.set(rotation[0], rotation[1], rotation[2]);
            }
            if (scale3) {
              object.scale.set(scale3[0], scale3[1], scale3[2]);
            }
            object.updateMatrix();
            const tempGeometry = object.geometry.clone();
            tempGeometry.applyMatrix4(object.matrix);
            object.geometry = tempGeometry;
            object.renderOrder = Infinity;
            object.position.set(0, 0, 0);
            object.rotation.set(0, 0, 0);
            object.scale.set(1, 1, 1);
            gizmo.add(object);
          }
        }
        return gizmo;
      }
      this.gizmo = {};
      this.picker = {};
      this.helper = {};
      this.add(this.gizmo["translate"] = setupGizmo(gizmoTranslate));
      this.add(this.gizmo["rotate"] = setupGizmo(gizmoRotate));
      this.add(this.gizmo["scale"] = setupGizmo(gizmoScale));
      this.add(this.picker["translate"] = setupGizmo(pickerTranslate));
      this.add(this.picker["rotate"] = setupGizmo(pickerRotate));
      this.add(this.picker["scale"] = setupGizmo(pickerScale));
      this.add(this.helper["translate"] = setupGizmo(helperTranslate));
      this.add(this.helper["rotate"] = setupGizmo(helperRotate));
      this.add(this.helper["scale"] = setupGizmo(helperScale));
      this.picker["translate"].visible = false;
      this.picker["rotate"].visible = false;
      this.picker["scale"].visible = false;
    }
    // updateMatrixWorld will update transformations and appearance of individual handles
    updateMatrixWorld(force) {
      const space = this.mode === "scale" ? "local" : this.space;
      const quaternion2 = space === "local" ? this.worldQuaternion : _identityQuaternion;
      this.gizmo["translate"].visible = this.mode === "translate";
      this.gizmo["rotate"].visible = this.mode === "rotate";
      this.gizmo["scale"].visible = this.mode === "scale";
      this.helper["translate"].visible = this.mode === "translate";
      this.helper["rotate"].visible = this.mode === "rotate";
      this.helper["scale"].visible = this.mode === "scale";
      let handles = [];
      handles = handles.concat(this.picker[this.mode].children);
      handles = handles.concat(this.gizmo[this.mode].children);
      handles = handles.concat(this.helper[this.mode].children);
      for (let i = 0; i < handles.length; i++) {
        const handle = handles[i];
        handle.visible = true;
        handle.rotation.set(0, 0, 0);
        handle.position.copy(this.worldPosition);
        let factor;
        if (this.camera.isOrthographicCamera) {
          factor = (this.camera.top - this.camera.bottom) / this.camera.zoom;
        } else {
          factor = this.worldPosition.distanceTo(this.cameraPosition) * Math.min(1.9 * Math.tan(Math.PI * this.camera.fov / 360) / this.camera.zoom, 7);
        }
        handle.scale.set(1, 1, 1).multiplyScalar(factor * this.size / 7);
        if (handle.tag === "helper") {
          handle.visible = false;
          if (handle.name === "AXIS") {
            handle.position.copy(this.worldPositionStart);
            handle.visible = !!this.axis;
            if (this.axis === "X") {
              _tempQuaternion.setFromEuler(_tempEuler.set(0, 0, 0));
              handle.quaternion.copy(quaternion2).multiply(_tempQuaternion);
              if (Math.abs(_alignVector.copy(_unitX).applyQuaternion(quaternion2).dot(this.eye)) > 0.9) {
                handle.visible = false;
              }
            }
            if (this.axis === "Y") {
              _tempQuaternion.setFromEuler(_tempEuler.set(0, 0, Math.PI / 2));
              handle.quaternion.copy(quaternion2).multiply(_tempQuaternion);
              if (Math.abs(_alignVector.copy(_unitY).applyQuaternion(quaternion2).dot(this.eye)) > 0.9) {
                handle.visible = false;
              }
            }
            if (this.axis === "Z") {
              _tempQuaternion.setFromEuler(_tempEuler.set(0, Math.PI / 2, 0));
              handle.quaternion.copy(quaternion2).multiply(_tempQuaternion);
              if (Math.abs(_alignVector.copy(_unitZ).applyQuaternion(quaternion2).dot(this.eye)) > 0.9) {
                handle.visible = false;
              }
            }
            if (this.axis === "XYZE") {
              _tempQuaternion.setFromEuler(_tempEuler.set(0, Math.PI / 2, 0));
              _alignVector.copy(this.rotationAxis);
              handle.quaternion.setFromRotationMatrix(_lookAtMatrix.lookAt(_zeroVector, _alignVector, _unitY));
              handle.quaternion.multiply(_tempQuaternion);
              handle.visible = this.dragging;
            }
            if (this.axis === "E") {
              handle.visible = false;
            }
          } else if (handle.name === "START") {
            handle.position.copy(this.worldPositionStart);
            handle.visible = this.dragging;
          } else if (handle.name === "END") {
            handle.position.copy(this.worldPosition);
            handle.visible = this.dragging;
          } else if (handle.name === "DELTA") {
            handle.position.copy(this.worldPositionStart);
            handle.quaternion.copy(this.worldQuaternionStart);
            _tempVector.set(1e-10, 1e-10, 1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1);
            _tempVector.applyQuaternion(this.worldQuaternionStart.clone().invert());
            handle.scale.copy(_tempVector);
            handle.visible = this.dragging;
          } else {
            handle.quaternion.copy(quaternion2);
            if (this.dragging) {
              handle.position.copy(this.worldPositionStart);
            } else {
              handle.position.copy(this.worldPosition);
            }
            if (this.axis) {
              handle.visible = this.axis.search(handle.name) !== -1;
            }
          }
          continue;
        }
        handle.quaternion.copy(quaternion2);
        if (this.mode === "translate" || this.mode === "scale") {
          const AXIS_HIDE_TRESHOLD = 0.99;
          const PLANE_HIDE_TRESHOLD = 0.2;
          const AXIS_FLIP_TRESHOLD = 0;
          if (handle.name === "X" || handle.name === "XYZX") {
            if (Math.abs(_alignVector.copy(_unitX).applyQuaternion(quaternion2).dot(this.eye)) > AXIS_HIDE_TRESHOLD) {
              handle.scale.set(1e-10, 1e-10, 1e-10);
              handle.visible = false;
            }
          }
          if (handle.name === "Y" || handle.name === "XYZY") {
            if (Math.abs(_alignVector.copy(_unitY).applyQuaternion(quaternion2).dot(this.eye)) > AXIS_HIDE_TRESHOLD) {
              handle.scale.set(1e-10, 1e-10, 1e-10);
              handle.visible = false;
            }
          }
          if (handle.name === "Z" || handle.name === "XYZZ") {
            if (Math.abs(_alignVector.copy(_unitZ).applyQuaternion(quaternion2).dot(this.eye)) > AXIS_HIDE_TRESHOLD) {
              handle.scale.set(1e-10, 1e-10, 1e-10);
              handle.visible = false;
            }
          }
          if (handle.name === "XY") {
            if (Math.abs(_alignVector.copy(_unitZ).applyQuaternion(quaternion2).dot(this.eye)) < PLANE_HIDE_TRESHOLD) {
              handle.scale.set(1e-10, 1e-10, 1e-10);
              handle.visible = false;
            }
          }
          if (handle.name === "YZ") {
            if (Math.abs(_alignVector.copy(_unitX).applyQuaternion(quaternion2).dot(this.eye)) < PLANE_HIDE_TRESHOLD) {
              handle.scale.set(1e-10, 1e-10, 1e-10);
              handle.visible = false;
            }
          }
          if (handle.name === "XZ") {
            if (Math.abs(_alignVector.copy(_unitY).applyQuaternion(quaternion2).dot(this.eye)) < PLANE_HIDE_TRESHOLD) {
              handle.scale.set(1e-10, 1e-10, 1e-10);
              handle.visible = false;
            }
          }
          if (handle.name.search("X") !== -1) {
            if (_alignVector.copy(_unitX).applyQuaternion(quaternion2).dot(this.eye) < AXIS_FLIP_TRESHOLD) {
              if (handle.tag === "fwd") {
                handle.visible = false;
              } else {
                handle.scale.x *= -1;
              }
            } else if (handle.tag === "bwd") {
              handle.visible = false;
            }
          }
          if (handle.name.search("Y") !== -1) {
            if (_alignVector.copy(_unitY).applyQuaternion(quaternion2).dot(this.eye) < AXIS_FLIP_TRESHOLD) {
              if (handle.tag === "fwd") {
                handle.visible = false;
              } else {
                handle.scale.y *= -1;
              }
            } else if (handle.tag === "bwd") {
              handle.visible = false;
            }
          }
          if (handle.name.search("Z") !== -1) {
            if (_alignVector.copy(_unitZ).applyQuaternion(quaternion2).dot(this.eye) < AXIS_FLIP_TRESHOLD) {
              if (handle.tag === "fwd") {
                handle.visible = false;
              } else {
                handle.scale.z *= -1;
              }
            } else if (handle.tag === "bwd") {
              handle.visible = false;
            }
          }
        } else if (this.mode === "rotate") {
          _tempQuaternion2.copy(quaternion2);
          _alignVector.copy(this.eye).applyQuaternion(_tempQuaternion.copy(quaternion2).invert());
          if (handle.name.search("E") !== -1) {
            handle.quaternion.setFromRotationMatrix(_lookAtMatrix.lookAt(this.eye, _zeroVector, _unitY));
          }
          if (handle.name === "X") {
            _tempQuaternion.setFromAxisAngle(_unitX, Math.atan2(-_alignVector.y, _alignVector.z));
            _tempQuaternion.multiplyQuaternions(_tempQuaternion2, _tempQuaternion);
            handle.quaternion.copy(_tempQuaternion);
          }
          if (handle.name === "Y") {
            _tempQuaternion.setFromAxisAngle(_unitY, Math.atan2(_alignVector.x, _alignVector.z));
            _tempQuaternion.multiplyQuaternions(_tempQuaternion2, _tempQuaternion);
            handle.quaternion.copy(_tempQuaternion);
          }
          if (handle.name === "Z") {
            _tempQuaternion.setFromAxisAngle(_unitZ, Math.atan2(_alignVector.y, _alignVector.x));
            _tempQuaternion.multiplyQuaternions(_tempQuaternion2, _tempQuaternion);
            handle.quaternion.copy(_tempQuaternion);
          }
        }
        handle.visible = handle.visible && (handle.name.indexOf("X") === -1 || this.showX);
        handle.visible = handle.visible && (handle.name.indexOf("Y") === -1 || this.showY);
        handle.visible = handle.visible && (handle.name.indexOf("Z") === -1 || this.showZ);
        handle.visible = handle.visible && (handle.name.indexOf("E") === -1 || this.showX && this.showY && this.showZ);
        handle.material._opacity = handle.material._opacity || handle.material.opacity;
        handle.material._color = handle.material._color || handle.material.color.clone();
        handle.material.color.copy(handle.material._color);
        handle.material.opacity = handle.material._opacity;
        if (!this.enabled) {
          handle.material.opacity *= 0.5;
          handle.material.color.lerp(new Color(1, 1, 1), 0.5);
        } else if (this.axis) {
          if (handle.name === this.axis) {
            handle.material.opacity = 1;
            handle.material.color.lerp(new Color(1, 1, 1), 0.5);
          } else if (this.axis.split("").some(function(a) {
            return handle.name === a;
          })) {
            handle.material.opacity = 1;
            handle.material.color.lerp(new Color(1, 1, 1), 0.5);
          } else {
            handle.material.opacity *= 0.25;
            handle.material.color.lerp(new Color(1, 1, 1), 0.5);
          }
        }
      }
      super.updateMatrixWorld(force);
    }
  };
  TransformControlsGizmo.prototype.isTransformControlsGizmo = true;
  var TransformControlsPlane = class extends Mesh {
    constructor() {
      super(
        new PlaneGeometry(1e5, 1e5, 2, 2),
        new MeshBasicMaterial({ visible: false, wireframe: true, side: DoubleSide, transparent: true, opacity: 0.1, toneMapped: false })
      );
      this.type = "TransformControlsPlane";
    }
    updateMatrixWorld(force) {
      let space = this.space;
      this.position.copy(this.worldPosition);
      if (this.mode === "scale") space = "local";
      _v1.copy(_unitX).applyQuaternion(space === "local" ? this.worldQuaternion : _identityQuaternion);
      _v2.copy(_unitY).applyQuaternion(space === "local" ? this.worldQuaternion : _identityQuaternion);
      _v3.copy(_unitZ).applyQuaternion(space === "local" ? this.worldQuaternion : _identityQuaternion);
      _alignVector.copy(_v2);
      switch (this.mode) {
        case "translate":
        case "scale":
          switch (this.axis) {
            case "X":
              _alignVector.copy(this.eye).cross(_v1);
              _dirVector.copy(_v1).cross(_alignVector);
              break;
            case "Y":
              _alignVector.copy(this.eye).cross(_v2);
              _dirVector.copy(_v2).cross(_alignVector);
              break;
            case "Z":
              _alignVector.copy(this.eye).cross(_v3);
              _dirVector.copy(_v3).cross(_alignVector);
              break;
            case "XY":
              _dirVector.copy(_v3);
              break;
            case "YZ":
              _dirVector.copy(_v1);
              break;
            case "XZ":
              _alignVector.copy(_v3);
              _dirVector.copy(_v2);
              break;
            case "XYZ":
            case "E":
              _dirVector.set(0, 0, 0);
              break;
          }
          break;
        case "rotate":
        default:
          _dirVector.set(0, 0, 0);
      }
      if (_dirVector.length() === 0) {
        this.quaternion.copy(this.cameraQuaternion);
      } else {
        _tempMatrix.lookAt(_tempVector.set(0, 0, 0), _dirVector, _alignVector);
        this.quaternion.setFromRotationMatrix(_tempMatrix);
      }
      super.updateMatrixWorld(force);
    }
  };
  TransformControlsPlane.prototype.isTransformControlsPlane = true;

  // src/blockbench/gizmo.js
  var mirror2 = (p) => [-p[0], p[1], p[2]];
  var Gizmo = class {
    constructor(controller2) {
      this.controller = controller2;
      this.controls = null;
      this.node = null;
      this.target = null;
      this.drag = null;
      this.down = null;
      this.step = 0;
      this.events = [];
      const listen = (name, fn) => {
        document.addEventListener(name, fn, true);
        this.events.push([name, fn]);
      };
      listen("pointermove", (e) => this.pointer(e, "move"));
      listen("pointerdown", (e) => this.pointer(e, "down"));
      listen("pointerup", (e) => this.pointer(e, "up"));
      listen("pointercancel", () => {
        this.down = null;
        this.cancel();
      });
      listen("keydown", (e) => {
        if (e.key === "Escape" && this.drag) {
          e.stopImmediatePropagation();
          this.cancel();
        }
      });
    }
    clear() {
      this.controls?.detach();
      this.node?.removeFromParent();
      this.node = null;
      this.target = null;
    }
    attach(target) {
      this.clear();
      const group = Group.all.find((g) => g.name === target.bone);
      if (!group || !target.mode) return;
      if (!this.controls) {
        const surface = document.createElement("canvas");
        this.controls = new TransformControls(Preview.selected.camera, surface);
        surface.ownerDocument.removeEventListener("pointerup", this.controls._onPointerUp);
        this.controls.setSize(0.8);
        scene.add(this.controls);
        this.controls.addEventListener("mouseDown", () => this.begin());
        this.controls.addEventListener("objectChange", () => this.change());
        this.controls.addEventListener("mouseUp", () => this.finish());
      }
      this.target = target;
      this.group = group;
      this.node = new THREE.Object3D();
      group.mesh.add(this.node);
      this.node.position.fromArray(sub2(mirror2(target.position), group.origin));
      this.node.quaternion.set(target.quaternion[0], -target.quaternion[1], -target.quaternion[2], target.quaternion[3]);
      this.node.updateMatrixWorld(true);
      this.aligned = Math.abs(Math.abs(group.mesh.getWorldQuaternion(new THREE.Quaternion()).w) - 1) < 1e-6;
      this.controls.camera = Preview.selected.camera;
      this.controls.setSpace(target.mode === "translate" ? "world" : "local");
      this.controls.setMode(target.mode);
      this.controls.attach(this.node);
      this.controls.updateMatrixWorld(true);
      Transformer.visible = false;
    }
    snap(event) {
      this.step = canvasGridSize(event.shiftKey, event.ctrlKey || event.metaKey);
      this.controls.setRotationSnap(this.step * Math.PI / 180);
    }
    pointer(event, kind) {
      if (!this.controller.active() || this.controller.preview.state) return;
      const preview = this.drag ? this.preview : Preview.all.find((p) => !p.offscreen && p.canvas === event.target);
      if (!preview) {
        if (kind !== "move") this.down = null;
        return;
      }
      const rect = preview.canvas.getBoundingClientRect(), x = (event.clientX - rect.left) / rect.width * 2 - 1, y = -(event.clientY - rect.top) / rect.height * 2 + 1;
      const controls2 = this.controls?.object && this.controls;
      if (controls2) {
        controls2.camera = preview.camera;
        controls2.updateMatrixWorld(true);
        const pointer = { x, y, button: kind === "move" ? -1 : event.button };
        if (!this.drag) controls2.pointerHover(pointer);
        const grab = this.drag ? true : kind === "down" ? event.button === 0 && !!controls2.axis : kind === "move" && !!controls2.axis;
        if (grab) {
          event.stopImmediatePropagation();
          event.preventDefault();
          if (kind === "down") {
            this.preview = preview;
            this.down = null;
            this.snap(event);
            controls2.pointerDown(pointer);
          } else if (kind === "move") {
            this.snap(event);
            controls2.pointerMove(pointer);
          } else controls2.pointerUp(pointer);
          return;
        }
      }
      if (kind === "down" && event.button === 0) this.down = { x: event.clientX, y: event.clientY, preview };
      else if (kind === "up" && this.down) {
        const down = this.down;
        this.down = null;
        if (down.preview === preview && Math.hypot(event.clientX - down.x, event.clientY - down.y) < 5) this.controller.pick(this.controller.overlay.pick(preview, x, y));
      }
    }
    value() {
      const { node, group, target } = this, mode = this.controls.mode, step = this.aligned ? this.step : 0;
      if (mode === "translate") {
        const position = mirror2(add2(node.position.toArray(), group.origin));
        return { position: step ? position.map((n, i) => target.position[i] + Math.round((n - target.position[i]) / step) * step) : position };
      }
      if (mode === "rotate") return { quaternion: [node.quaternion.x, -node.quaternion.y, -node.quaternion.z, node.quaternion.w] };
      return { size: target.size.map((n, i) => {
        const raw = n * Math.abs(node.scale.getComponent(i));
        return Math.max(0.01, this.step ? n + Math.round((raw - n) / this.step) * this.step : raw);
      }) };
    }
    begin() {
      this.drag = { orbit: this.preview.controls.enabled, edit: null };
      this.preview.controls.enabled = false;
    }
    change() {
      if (!this.drag) return;
      const edit = this.controller.gizmoEdit(this.value());
      if (edit) {
        this.drag.edit = edit;
        this.controller.draft(edit);
      }
    }
    finish() {
      if (!this.drag) return;
      const { edit, orbit } = this.drag;
      this.preview.controls.enabled = orbit;
      this.drag = null;
      if (!edit) {
        this.controller.refresh();
        return;
      }
      try {
        this.controller.commit(edit);
      } catch (error) {
        this.controller.refresh();
        this.controller.showError(error);
      }
    }
    cancel() {
      if (!this.drag) return;
      this.preview.controls.enabled = this.drag.orbit;
      this.drag = null;
      if (this.controls) {
        this.controls.dragging = false;
        this.controls.axis = null;
      }
      this.controller.refresh();
    }
    dispose() {
      this.cancel();
      this.clear();
      this.controls?.removeFromParent();
      this.controls?.dispose();
      for (const [name, fn] of this.events) document.removeEventListener(name, fn, true);
    }
  };

  // src/blockbench/dialogs.js
  var STATUS = { ready: "status_ready", invalid: "status_invalid", unconfigured: "status_unconfigured", missing: "status_missing", unsupported: "status_unsupported" };
  var openable = (row) => !!row.config && !["missing", "unsupported"].includes(row.status);
  function browserDialog(controller2) {
    controller2.preview.reset();
    controller2.safe(() => controller2.syncGeometry());
    if (controller2.browser) {
      controller2.browser.show();
      return;
    }
    controller2.browser = new Dialog("ragdoll_browser", {
      title: t("browser_title"),
      width: 620,
      component: {
        data: () => ({ s: controller2.state }),
        computed: { rows() {
          const q = this.s.search.toLowerCase();
          return this.s.rows.filter((row) => row.id.toLowerCase().includes(q));
        } },
        methods: {
          t,
          openable,
          status(row) {
            return t(STATUS[row.status]);
          },
          detail(row) {
            return row.status === "missing" ? t("detail_missing", [row.missing.join(", ")]) : row.status === "unsupported" ? t("detail_unsupported") : row.error ?? "";
          },
          pick(row) {
            this.s.current = row.id;
          },
          open(row) {
            if (openable(row)) controller2.safe(() => controller2.openEntity(row));
          },
          importPack() {
            controller2.choosePack();
          },
          exportPack() {
            exportDialog(controller2);
          }
        },
        template: `<div class="rg-browser">
        <div class="rg-browser-bar">
          <i class="material-icons">inventory_2</i>
          <span class="rg-grow rg-ellipsis" :title="s.packName">{{ s.packName || t('no_pack') }}</span>
          <button @click="importPack" :disabled="s.busy">{{ s.packName ? t('replace_pack_button') : t('import_pack_button') }}</button>
          <button @click="exportPack" :disabled="s.busy || !s.rows.length">{{ t('export_button') }}</button>
        </div>
        <search-bar v-model="s.search"></search-bar>
        <ul class="rg-entity-list" role="listbox">
          <li v-for="row in rows" :key="row.id" role="option" :aria-selected="s.current===row.id" :class="{selected: s.current===row.id, 'rg-unavailable': !openable(row)}" :title="detail(row)" @click="pick(row)" @dblclick="open(row)">
            <i class="material-icons">{{ openable(row) ? 'accessibility_new' : 'block' }}</i>
            <div class="rg-grow"><div class="rg-ellipsis">{{ row.id }}</div><div v-if="detail(row)" class="rg-muted rg-ellipsis">{{ detail(row) }}</div></div>
            <span class="rg-status" :class="'rg-status-'+row.status">{{ status(row) }}</span>
          </li>
          <li v-if="!rows.length" class="rg-empty">{{ s.packName ? t('no_entities') : t('no_pack_hint') }}</li>
        </ul>
        <div class="rg-muted">{{ s.progress || t('browser_hint') }}</div>
      </div>`
      },
      buttons: [t("open"), t("close")],
      onConfirm() {
        const row = controller2.state.rows.find((r) => r.id === controller2.state.current);
        if (!row || !openable(row)) return false;
        controller2.safe(() => controller2.openEntity(row));
      }
    });
    controller2.browser.show();
  }
  function exportDialog(controller2) {
    if (!controller2.resources) {
      Blockbench.showMessageBox({ title: t("export_title"), message: t("export_no_pack"), buttons: [t("import_pack_button"), t("cancel")] }, (button) => {
        if (button === 0) controller2.choosePack(() => exportDialog(controller2));
      });
      return;
    }
    controller2.preview.reset();
    controller2.safe(() => {
      controller2.syncGeometry();
      for (const project of ModelProject.all) {
        const data = project.bedrock_ragdoll;
        if (data?.entity) for (const id of Object.keys(data.geometries)) controller2.writeGeometry(data, id);
      }
    });
    const s = controller2.state, rows = s.rows.filter((row) => ["ready", "invalid"].includes(row.status));
    const unlinked = ModelProject.all.filter((p) => p.bedrock_ragdoll?.entity && controller2.linkState(p.bedrock_ragdoll) === "standalone").map((p) => p.name || p.bedrock_ragdoll.entity);
    new Dialog("ragdoll_export", {
      title: t("export_title"),
      width: 540,
      part_order: ["form", "component"],
      form: {
        name: { label: t("pack_name"), type: "text", value: s.packName.replace(/\.(mcpack|zip)$/i, "") + " Ragdoll" }
      },
      component: {
        data: () => ({ rows, unlinked }),
        computed: { count() {
          return this.rows.filter((r) => r.selected && r.status === "ready").length;
        } },
        methods: { t, all(value) {
          for (const row of this.rows) if (row.status === "ready") row.selected = value;
        } },
        template: `<div class="rg-export">
        <div class="rg-export-bar"><span class="rg-grow">{{ t('export_entities', [count]) }}</span><a href="#" @click.prevent="all(true)">{{ t('select_all') }}</a><a href="#" @click.prevent="all(false)">{{ t('deselect_all') }}</a></div>
        <ul class="rg-entity-list rg-export-list">
          <li v-for="row in rows" :key="row.id" :title="row.error || ''" :class="{'rg-unavailable': row.status !== 'ready'}">
            <label class="rg-grow rg-check-row"><input type="checkbox" v-model="row.selected" :disabled="row.status !== 'ready'"><span class="rg-ellipsis">{{ row.id }}</span></label>
            <span v-if="row.status !== 'ready'" class="rg-status rg-status-invalid">{{ t('status_invalid') }}</span>
          </li>
          <li v-if="!rows.length" class="rg-empty">{{ t('no_entities') }}</li>
        </ul>
        <p v-if="unlinked.length" class="rg-note">{{ t('export_unlinked', [unlinked.join(', ')]) }}</p>
      </div>`
      },
      buttons: [t("export_confirm"), t("cancel")],
      onConfirm(result) {
        if (!result.name.trim()) return false;
        controller2.safe(() => controller2.exportPack({ name: result.name.trim() }));
      }
    }).show();
  }
  function linkDialog(rows, callback) {
    new Dialog("ragdoll_link", {
      title: t("link_title"),
      width: 480,
      form: { info: { type: "info", text: t("link_tip") }, entity: { label: t("entity"), type: "select", options: Object.fromEntries(rows.map((r) => [r.id, r.id])), value: rows[0].id } },
      buttons: [t("link_button"), t("cancel")],
      onConfirm(result) {
        const row = rows.find((r) => r.id === result.entity);
        if (row) callback(row);
      }
    }).show();
  }
  function jointDialog(bodies, parent, callback) {
    new Dialog("ragdoll_joint", {
      title: t("add_joint"),
      form: { parent: { label: t("joint_a"), type: "select", options: Object.fromEntries(bodies.map((id) => [id, id])), value: parent } },
      buttons: [t("confirm"), t("cancel")],
      onConfirm(result) {
        callback(result.parent);
      }
    }).show();
  }
  function modelsDialog({ config, client, resources }, callback) {
    const variants = new Map(config.variants.map((v) => [v.geometry, v]));
    const aliases2 = [.../* @__PURE__ */ new Set([...variants.keys(), ...Object.keys(client.geometry)])].filter((alias) => resources.geometries.has(client.geometry[alias] ?? alias));
    const form = {
      default_model: { label: t("default_model"), type: "select", options: Object.fromEntries(aliases2.map((alias) => [alias, alias])), value: config.variants.at(-1).geometry }
    };
    aliases2.forEach((alias, i) => {
      form["model" + i] = { label: alias, type: "checkbox", value: variants.has(alias), description: client.geometry[alias] ?? alias, condition: (values) => values.default_model !== alias };
      form["when" + i] = { label: t("custom_condition"), type: "text", value: variants.get(alias)?.when ?? "", condition: (values) => values.default_model !== alias && values["model" + i] };
    });
    new Dialog("ragdoll_models", {
      title: t("section_models"),
      width: 540,
      form,
      buttons: [t("confirm"), t("cancel")],
      onConfirm(values) {
        const selected = aliases2.filter((alias, i) => alias !== values.default_model && values["model" + i]).map((alias) => ({ geometry: alias, when: values["when" + aliases2.indexOf(alias)].trim() }));
        selected.push({ geometry: values.default_model });
        try {
          return callback(selected);
        } catch (error) {
          Blockbench.showMessageBox({ title: t("error_title"), message: errorText(error), buttons: [t("close")] });
          return false;
        }
      }
    }).show();
  }

  // src/blockbench/labels.js
  var TRIGGERS = { hurt: "q.max_health>0&&q.health<q.max_health" };
  var RELEASES = { healed: "q.health>=q.max_health" };
  var presetOf = (presets, value) => Object.keys(presets).find((key2) => presets[key2] === value) ?? "custom";
  var variantLabel = (alias) => alias === "default" ? t("variant_default") : alias;

  // src/blockbench/controller.js
  var shapeKey = (g) => g && JSON.stringify(g.bones.map((b) => ({
    name: b.name,
    parent: b.parent ?? null,
    pivot: b.pivot ?? [0, 0, 0],
    rotation: b.rotation ?? [0, 0, 0],
    cubes: (b.cubes ?? []).map((c) => ({ origin: c.origin, size: c.size, inflate: c.inflate ?? 0, rotation: c.rotation ?? [0, 0, 0], pivot: c.rotation?.some(Boolean) ? c.pivot ?? null : null }))
  })));
  var Controller = class {
    constructor() {
      this.resources = null;
      this.browser = null;
      this.project = null;
      this.infos = null;
      this.overlay = new Overlay();
      this.snapshots = /* @__PURE__ */ new WeakMap();
      this.outputKey = null;
      this.outputRequest = 0;
      this.state = {
        packName: "",
        rows: [],
        search: "",
        current: "",
        busy: false,
        progress: "",
        mode: "",
        configured: false,
        canCreate: false,
        running: false,
        previewing: false,
        entity: "",
        variant: 0,
        variants: [],
        link: "",
        error: "",
        missing: [],
        tree: [],
        props: null,
        outputLevels: [],
        outputPending: false,
        selected: { type: "entity" },
        collapsed: [],
        tool: "move",
        custom: { trigger: false, release: false }
      };
      this.preview = new Preview2(() => {
        this.state.running = this.preview.running;
        this.state.previewing = !!this.preview.state;
        BarItems.ragdoll_preview?.setIcon(this.preview.running ? "pause" : "play_arrow");
        BarItems.ragdoll_preview_animation?.setIcon(this.preview.running ? "pause" : "accessibility_new");
        this.draw();
      }, (error) => this.showError(error, "preview_error"));
      this.gizmo = new Gizmo(this);
    }
    showError(error, title = "error_title") {
      console.error(error);
      Blockbench.showMessageBox({ title: t(title), message: errorText(error), buttons: [t("close")] });
    }
    safe(fn) {
      try {
        const result = fn();
        if (result?.catch) result.catch((error) => this.showError(error));
        return result;
      } catch (error) {
        this.showError(error);
      }
    }
    active() {
      return Modes.selected?.id === "ragdoll" && !!Project?.bedrock_ragdoll?.entity;
    }
    context() {
      const data = Project?.bedrock_ragdoll;
      if (!data?.entity) return null;
      const resources = { geometries: new Map(Object.entries(data.geometries)) };
      return { data, config: data.config, client: data.client, variant: data.variant, resources, env: { resources, client: data.client } };
    }
    geometryId(data, v = data.variant) {
      const alias = data.config.variants[v].geometry;
      return data.client.geometry[alias] ?? alias;
    }
    bindings(config) {
      return Object.fromEntries(Object.entries(config.bodies).map(([id, body]) => [id, Group.all.find((g) => g.name === body.bone)?.uuid]));
    }
    // Projects created from a model alone have a made-up client entity until they are linked to a pack.
    linkState(data) {
      if (data.standalone || /^custom:/.test(data.entity) && !data.client.textures && !data.client.render_controllers) return "standalone";
      return this.resources?.clients.has(data.entity) ? "linked" : "unloaded";
    }
    async importFile(file) {
      this.preview.reset();
      this.state.busy = true;
      this.state.progress = t("reading");
      try {
        const resources = await importPack(file.content, JSZip);
        this.resources = resources;
        this.outputKey = null;
        this.state.rows = entityRows(resources);
        this.state.packName = file.name;
        this.state.search = "";
        this.state.current = "";
        this.attachSavedProjects();
        this.refresh();
      } finally {
        this.state.busy = false;
        this.state.progress = "";
      }
    }
    choosePack(then) {
      const open = () => Blockbench.import({ type: t("pack"), extensions: ["mcpack", "zip"], readtype: "buffer" }, (files) => {
        if (files[0]) this.safe(async () => {
          await this.importFile(files[0]);
          then?.();
        });
      });
      if (this.resources) Blockbench.showMessageBox({ title: t("pack"), message: t("replace_pack"), buttons: [t("confirm"), t("cancel")] }, (button) => {
        if (button === 0) open();
      });
      else open();
    }
    attachSavedProjects() {
      for (const project of ModelProject.all) {
        const data = project.bedrock_ragdoll;
        if (!data?.entity || this.linkState(data) === "standalone") continue;
        const row = this.state.rows.find((r) => r.id === data.entity);
        if (!row) continue;
        row.config = clone(data.config);
        row.selected = true;
        for (const id of Object.keys(data.geometries)) this.writeGeometry(data, id);
      }
    }
    validateRow(row) {
      try {
        normalizeModel(row.config, this.resources, descriptionOf(this.resources.clients.get(row.id)));
        row.status = "ready";
        delete row.error;
      } catch (error) {
        row.status = "invalid";
        row.error = errorText(error);
      }
    }
    // Keeps the stored geometry of the shown model in sync with Blockbench edits and writes real edits into the pack.
    syncGeometry() {
      const data = Project?.bedrock_ragdoll;
      if (!data?.entity || Format?.id !== "bedrock") return;
      const geometry = Codecs.bedrock.compile({ raw: true, visible_box: false })["minecraft:geometry"][0], id = this.geometryId(data);
      geometry.description.identifier = id;
      const snapshot = JSON.stringify({ bones: geometry.bones, width: Project.texture_width, height: Project.texture_height, visible: Project.visible_box });
      let snapshots = this.snapshots.get(Project);
      if (!snapshots) this.snapshots.set(Project, snapshots = /* @__PURE__ */ new Map());
      const previous = snapshots.get(id);
      if (previous === void 0) {
        snapshots.set(id, snapshot);
        return;
      }
      const byUUID = new Map(Group.all.map((g) => [g.uuid, g]));
      for (const [body, uuid] of Object.entries(data.bindings ?? {})) {
        const group = byUUID.get(uuid);
        if (!group || !data.config.bodies[body]) continue;
        data.config.bodies[body].bone = group.name;
        for (const variant of data.config.variants) if (variant.bodies?.[body]?.bone) variant.bodies[body].bone = group.name;
      }
      if (snapshot !== previous) {
        const old = data.geometries[id]?.description ?? {};
        geometry.description = { ...old, ...geometry.description };
        if (JSON.stringify(JSON.parse(previous).visible) === JSON.stringify(Project.visible_box)) {
          for (const key2 of ["visible_bounds_width", "visible_bounds_height", "visible_bounds_offset"]) {
            if (old[key2] === void 0) delete geometry.description[key2];
            else geometry.description[key2] = clone(old[key2]);
          }
        } else {
          geometry.description.visible_bounds_width = Project.visible_box[0];
          geometry.description.visible_bounds_height = Project.visible_box[1];
          geometry.description.visible_bounds_offset = [0, Project.visible_box[2], 0];
        }
        data.geometries[id] = geometry;
        snapshots.set(id, snapshot);
      }
      this.writeGeometry(data, id);
    }
    writeGeometry(data, id) {
      if (this.linkState(data) !== "linked") return;
      const geometry = data.geometries[id];
      if (geometry && JSON.stringify(this.resources.geometries.get(id)) !== JSON.stringify(geometry)) {
        this.resources.geometries.set(id, clone(geometry));
        const path = this.resources.geometryFiles.get(id), original = this.resources.json.get(path), document2 = original ? clone(original) : null;
        if (document2?.["minecraft:geometry"]) {
          const index = document2["minecraft:geometry"].findIndex((g) => g.description.identifier === id);
          document2["minecraft:geometry"][index] = geometry;
        } else if (document2) {
          const value = clone(geometry);
          delete value.description;
          document2[id] = value;
        }
        if (document2) {
          this.resources.json.set(path, document2);
          this.resources.files.set(path, new TextEncoder().encode(JSON.stringify(document2, null, 2)));
        }
      }
      const row = this.state.rows.find((r) => r.id === data.entity);
      if (row) {
        row.config = clone(data.config);
        this.validateRow(row);
      }
    }
    // Parsing appends to the outliner, so callers clear it first. The temporary path keeps Blockbench from merging tabs.
    parseGeometry(geometry, key2) {
      const path = Project.export_path, width = Project.texture_width, height = Project.texture_height;
      Project.export_path = `ragdoll://${key2}`;
      Project.visible_box.splice(0, 3, 1, 1, 0);
      try {
        Codecs.bedrock.parse({ format_version: "1.12.0", "minecraft:geometry": [clone(geometry)] }, "");
      } finally {
        Project.export_path = path;
      }
      if (geometry.description.texture_width === void 0) Project.texture_width = width;
      if (geometry.description.texture_height === void 0) Project.texture_height = height;
    }
    async loadTexture(client) {
      const texture = Object.values(client.textures ?? {}).map((path) => this.resources?.files.get(path + ".png")).find(Boolean);
      if (!texture) return null;
      const project = Project, dataURL = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(new Blob([texture], { type: "image/png" }));
      });
      if (Project !== project) return null;
      const tex = new Texture({ name: "texture.png", keep_size: true });
      await new Promise((resolve) => {
        tex.img.addEventListener("error", resolve, { once: true });
        tex.fromDataURL(dataURL).add(false);
        tex.load_callback = resolve;
      });
      return Project === project ? tex : null;
    }
    // One project per entity; its models are switched inside the project.
    async openEntity(row) {
      if (!row?.config || ["missing", "unsupported"].includes(row.status)) return;
      this.browser?.hide();
      const existing = ModelProject.all.find((p) => p.bedrock_ragdoll?.entity === row.id);
      if (existing) {
        existing.select();
        Modes.options.ragdoll.select();
        this.refresh();
        return;
      }
      this.state.busy = true;
      try {
        this.preview.reset();
        this.syncGeometry();
        const record = this.resources?.clients.get(row.id);
        if (!record) fail("missing_source", [row.id]);
        const client = clone(descriptionOf(record)), config = clone(row.config), variant = config.variants.length - 1, id = client.geometry[config.variants[variant].geometry] ?? config.variants[variant].geometry;
        const geometry = this.resources.geometries.get(id);
        if (!geometry) fail("geometry", [id]);
        newProject(Formats.bedrock);
        Project.name = row.id.replace(":", "_");
        this.parseGeometry(geometry, row.id);
        const geometries = Object.fromEntries(Object.values(client.geometry).filter((key2) => this.resources.geometries.has(key2)).map((key2) => [key2, clone(this.resources.geometries.get(key2))]));
        Project.bedrock_ragdoll = { entity: row.id, variant, client, config, geometries, bindings: this.bindings(config) };
        const animations = relatedAnimations(this.resources, client);
        if (Object.keys(animations).length) (typeof AnimationCodec === "undefined" ? Animator : AnimationCodec.codecs.bedrock).loadFile({ path: "", json: { format_version: "1.8.0", animations } });
        const project = Project, tex = await this.loadTexture(client);
        if (Project !== project) return;
        if (tex) {
          if (geometry.description.texture_width === void 0) Project.texture_width = tex.width || 16;
          if (geometry.description.texture_height === void 0) Project.texture_height = tex.height || 16;
          tex.uv_width = Project.texture_width;
          tex.uv_height = Project.texture_height;
          for (const cube of Cube.all) cube.applyTexture(tex, true);
        }
        this.syncGeometry();
        Preview.selected?.loadAnglePreset?.({ position: [-48, 32, -48], target: [0, 16, 0], projection: "perspective" });
        Project.saved = false;
        Canvas.updateAll();
        Modes.options.ragdoll.select();
        this.refresh();
      } finally {
        this.state.busy = false;
      }
    }
    switchVariant(index, config) {
      const data = Project?.bedrock_ragdoll;
      index = Number(index);
      if (!data?.entity || !config && index === data.variant) return;
      this.preview.reset();
      this.gizmo.cancel();
      this.syncGeometry();
      const id = this.geometryId({ ...data, config: config ?? data.config }, index), geometry = data.geometries[id];
      if (!geometry) fail("geometry", [id]);
      for (const animation of Animation.all) for (const group of Group.all) if (animation.animators[group.uuid]) animation.animators[group.uuid].name = group.name;
      const stash = Animation.all.map((animation) => [animation, { ...animation.animators }]), texture = Texture.getDefault?.() ?? Texture.all[0];
      for (const node of [...Outliner.root]) node.remove(false);
      this.parseGeometry(geometry, data.entity);
      for (const [animation, animators] of stash) for (const [uuid, animator] of Object.entries(animators)) {
        if (animation.animators[uuid] === animator) continue;
        const key2 = animator instanceof BoneAnimator && Group.all.find((g) => g.name === animator.name)?.uuid || uuid;
        if (animation.animators[key2]) continue;
        animator.uuid = key2;
        animation.animators[key2] = animator;
      }
      if (texture) for (const cube of Cube.all) cube.applyTexture(texture, true);
      if (config) data.config = config;
      data.variant = index;
      data.bindings = this.bindings(data.config);
      Undo.history.length = 0;
      Undo.index = 0;
      this.syncGeometry();
      Project.saved = false;
      Canvas.updateAll();
      this.refresh();
    }
    chooseModels() {
      this.preview.reset();
      this.syncGeometry();
      const context = this.context();
      if (!context) return;
      const project = Project;
      modelsDialog(context, (selected) => {
        if (Project !== project) return false;
        this.setModels(selected);
        return true;
      });
    }
    setModels(selected) {
      this.preview.reset();
      this.gizmo.cancel();
      this.syncGeometry();
      const context = this.context();
      if (!context) return;
      const config = selectModels(context.config, context.env, selected), shown = this.geometryId(context.data);
      const index = config.variants.findIndex((v) => (context.client.geometry[v.geometry] ?? v.geometry) === shown);
      if (index < 0) {
        this.switchVariant(config.variants.length - 1, config);
        this.propagate();
        return;
      }
      Undo.initEdit({ ragdoll: true });
      context.data.config = config;
      context.data.variant = index;
      Undo.finishEdit(t("select_models"));
      this.propagate();
      this.refresh();
    }
    // "Start from a model": a bedrock model opened directly gets a generated ragdoll on request.
    createFromModel() {
      if (!Project || Format?.id !== "bedrock" || Project.bedrock_ragdoll?.entity) return;
      const geometry = Codecs.bedrock.compile({ raw: true, visible_box: false })["minecraft:geometry"][0];
      if (!geometry?.bones?.some((b) => b.cubes?.length)) fail("empty_model");
      const id = geometry.description.identifier, client = { identifier: "custom:" + id.replace(/^geometry\./, "").replace(/[^\w]/g, "_"), geometry: { default: id } };
      const config = autoConfig(client, { geometries: /* @__PURE__ */ new Map([[id, geometry]]) });
      Undo.initEdit({ ragdoll: true });
      Project.bedrock_ragdoll = { entity: client.identifier, standalone: true, variant: 0, client, config, geometries: { [id]: geometry }, bindings: this.bindings(config) };
      Undo.finishEdit(t("create_ragdoll"));
      this.snapshots.delete(Project);
      this.syncGeometry();
      this.state.selected = { type: "entity" };
      updateInterfacePanels();
      this.refresh();
    }
    linkEntity() {
      const data = Project?.bedrock_ragdoll;
      if (!data?.entity) return;
      if (!this.resources) {
        this.choosePack(() => this.linkEntity());
        return;
      }
      this.syncGeometry();
      const id = this.geometryId(data), rows = this.state.rows.filter((row) => Object.values(descriptionOf(this.resources.clients.get(row.id)).geometry ?? {}).includes(id));
      if (!rows.length) {
        Blockbench.showMessageBox({ title: t("link_title"), message: t("link_none", [id]), buttons: [t("close")] });
        return;
      }
      linkDialog(rows, (row) => this.safe(() => this.link(row)));
    }
    // The project's config moves to the chosen pack entity; its geometry replaces the pack geometry only if it was edited.
    link(row) {
      const data = Project.bedrock_ragdoll, id = this.geometryId(data);
      if (ModelProject.all.some((p) => p !== Project && p.bedrock_ragdoll?.entity === row.id)) fail("link_conflict", [row.id]);
      const client = clone(descriptionOf(this.resources.clients.get(row.id))), config = clone(data.config);
      for (const variant2 of config.variants) {
        const target = data.client.geometry[variant2.geometry] ?? variant2.geometry, alias = Object.keys(client.geometry).find((key2) => client.geometry[key2] === target);
        if (alias) variant2.geometry = alias;
      }
      const geometries = Object.fromEntries(Object.values(client.geometry).filter((key2) => this.resources.geometries.has(key2)).map((key2) => [key2, clone(this.resources.geometries.get(key2))]));
      if (shapeKey(data.geometries[id]) !== shapeKey(geometries[id])) geometries[id] = clone(data.geometries[id]);
      normalizeModel(config, { geometries: new Map(Object.entries(geometries)) }, client);
      const variant = config.variants.findIndex((v) => (client.geometry[v.geometry] ?? v.geometry) === id);
      Undo.initEdit({ ragdoll: true });
      Project.bedrock_ragdoll = { entity: row.id, variant: Math.max(0, variant), client, config, geometries, bindings: this.bindings(config) };
      Undo.finishEdit(t("link_title"));
      row.config = clone(config);
      row.selected = true;
      this.writeGeometry(Project.bedrock_ragdoll, id);
      this.refresh();
    }
    refresh() {
      if (this.gizmo.drag) return;
      if (this.preview.state && Project !== this.preview.state.project) this.preview.reset();
      const s = this.state, context = this.context(), configured = !!context;
      s.mode = Modes.selected?.id ?? "";
      s.canCreate = !context && !!Project && Format?.id === "bedrock";
      if (s.configured !== configured) {
        s.configured = configured;
        updateInterfacePanels();
      }
      if (this.project !== Project) {
        this.project = Project;
        s.selected = { type: "entity" };
        s.collapsed = [];
        s.custom = { trigger: false, release: false };
      }
      s.error = "";
      s.missing = [];
      if (!context) {
        Object.assign(s, { entity: "", variants: [], tree: [], props: null, link: "", outputLevels: [], outputPending: false });
        this.outputKey = null;
        this.outputRequest++;
        clearTimeout(this.outputTimer);
        this.outputWorker?.terminate();
        this.outputWorker = null;
        this.infos = null;
        this.draw();
        return;
      }
      const { data, config } = context;
      s.entity = data.entity;
      s.variant = data.variant;
      s.link = this.linkState(data);
      s.variants = config.variants.map((v, i) => ({ index: i, alias: v.geometry, label: variantLabel(v.geometry), geometry: data.client.geometry[v.geometry] ?? v.geometry, when: v.when ?? "", scale: v.scale ?? 1 }));
      try {
        this.infos = inspect(config, context.env);
      } catch (error) {
        this.infos = null;
        s.error = errorText(error);
        s.missing = Object.keys(config.bodies).filter((id) => !Group.all.some((g) => g.name === config.bodies[id].bone));
      }
      this.validateSelection(config);
      s.tree = this.buildTree(config);
      s.props = this.buildProps(config, this.infos);
      if (s.props?.type === "entity" && !s.error) this.estimateOutput(context);
      this.draw();
    }
    estimateOutput(context) {
      const record = this.resources?.clients.get(context.data.entity);
      const original = record?.value ?? { format_version: "1.10.0", "minecraft:client_entity": { description: context.client } };
      const config = clone(context.config);
      delete config.outputLevel;
      const key2 = JSON.stringify([config, original, context.data.geometries]);
      if (key2 === this.outputKey) return;
      const outputResources = { ...context.resources, reservedVariables: resourceVariables(this.resources ?? context.resources, original) };
      this.outputKey = key2;
      const request = ++this.outputRequest;
      clearTimeout(this.outputTimer);
      this.outputWorker?.terminate();
      this.outputWorker = null;
      this.state.outputLevels = [];
      this.state.outputPending = true;
      const cancelled = () => request !== this.outputRequest;
      this.outputTimer = setTimeout(async () => {
        if (typeof Worker !== "undefined") {
          try {
            const url = URL.createObjectURL(new Blob(['(() => {\n  // src/core/expression.mjs\n  var axes = ["x", "y", "z"];\n  var quat = [...axes, "w"];\n  var A = (name, value) => ({ kind: "set", name, value });\n  var If = (test, yes, no = []) => ({ kind: "if", test, yes: [yes].flat(Infinity), no: [no].flat(Infinity) });\n  var Loop = (count, body) => ({ kind: "loop", count, body: body.flat(Infinity) });\n  var set = (prefix, values) => Object.entries(values).map(([key, value]) => A(prefix + key, value));\n  var dot = (a, b, keys2 = axes) => keys2.map((k) => `${a}${k}*${b}${k}`).join("+");\n  var copy = (out, src, keys2 = axes) => keys2.map((k) => A(out + k, src + k));\n  var add = (out, a, b) => axes.map((k) => A(out + k, `${a}${k}+${b}${k}`));\n  var sub = (out, a, b) => axes.map((k) => A(out + k, `${a}${k}-${b}${k}`));\n  var scale = (out, src, factor, keys2 = axes) => keys2.map((k) => A(out + k, `${src}${k}*(${factor})`));\n  var cross = (out, a, b) => axes.map((k, i) => A(out + k, `${a}${axes[(i + 1) % 3]}*${b}${axes[(i + 2) % 3]}-${a}${axes[(i + 2) % 3]}*${b}${axes[(i + 1) % 3]}`));\n  var vector = (out, values, factor = "1") => axes.map((k, i) => A(out + k, `(${values[i]})*(${factor})`));\n  function normalize(prefix, keys2 = axes) {\n    return [A("t.norm", `math.max(math.sqrt(${dot(prefix, prefix, keys2)}),0.000001)`), scale(prefix, prefix, "1/t.norm", keys2)];\n  }\n  function emitNodes(nodes, target = "molang", depth = 0) {\n    return nodes.flat(Infinity).map((n) => {\n      if (n.kind === "set") return `${n.name}=${n.value};`;\n      if (n.kind === "if") return target === "molang" ? `(${n.test})?{${emitNodes(n.yes, target, depth)}}${n.no.length ? `:{${emitNodes(n.no, target, depth)}}` : ""};` : `if(${n.test}){${emitNodes(n.yes, target, depth)}}${n.no.length ? `else{${emitNodes(n.no, target, depth)}}` : ""}`;\n      return target === "molang" ? `loop(${n.count},{${emitNodes(n.body, target, depth + 1)}});` : `for(let i${depth}=0,n${depth}=${n.count};i${depth}<n${depth};i${depth}++){${emitNodes(n.body, target, depth + 1)}}`;\n    }).join("");\n  }\n  function emit(nodes, target = "molang") {\n    const source = emitNodes(nodes, target), names = /* @__PURE__ */ new Map();\n    const identifier = (index) => (index >= 26 ? identifier(Math.floor(index / 26) - 1) : "") + String.fromCharCode(97 + index % 26);\n    return source.replace(/\'[^\']*\'|(?<![\\w.])t\\.\\w+/g, (name) => {\n      if (name.startsWith("\'")) return name;\n      if (!names.has(name)) names.set(name, `t.${identifier(names.size)}`);\n      return names.get(name);\n    });\n  }\n  function choose(index, values, start = 0) {\n    if (Number.isInteger(Number(index))) return String(values[Number(index) - start]);\n    if (values.every((value) => value === values[0])) return String(values[0]);\n    const half = Math.floor(values.length / 2);\n    return `(${index}<${start + half}?${choose(index, values.slice(0, half), start)}:${choose(index, values.slice(half), start + half)})`;\n  }\n  function dispatch(index, values, action, start = 0) {\n    if (Number.isInteger(Number(index))) return action(values[Number(index) - start], Number(index));\n    if (values.length === 1) return action(values[0], start);\n    const half = Math.floor(values.length / 2);\n    return [If(`${index}<${start + half}`, dispatch(index, values.slice(0, half), action, start), dispatch(index, values.slice(half), action, start + half))];\n  }\n  function multiply(out, a, b) {\n    return [\n      A("t.mx", `${a}w*${b}x+${a}x*${b}w+${a}y*${b}z-${a}z*${b}y`),\n      A("t.my", `${a}w*${b}y-${a}x*${b}z+${a}y*${b}w+${a}z*${b}x`),\n      A("t.mz", `${a}w*${b}z+${a}x*${b}y-${a}y*${b}x+${a}z*${b}w`),\n      A("t.mw", `${a}w*${b}w-${a}x*${b}x-${a}y*${b}y-${a}z*${b}z`),\n      copy(out, "t.m", quat)\n    ];\n  }\n  function rotate(out, q, p) {\n    return [\n      cross("t.rc", q, p),\n      scale("t.rc", "t.rc", 2),\n      cross("t.rd", q, "t.rc"),\n      axes.map((k) => A(out + k, `${p}${k}+${q}w*t.rc${k}+t.rd${k}`))\n    ];\n  }\n  function axisRotation(out, axis2, angle) {\n    return [vector(out, axes.map((k) => k === axis2 ? `math.sin((${angle})*0.5)` : 0)), A(out + "w", `math.cos((${angle})*0.5)`)];\n  }\n\n  // src/core/math.mjs\n  var add2 = (a, b) => a.map((n, i) => n + b[i]);\n  var sub2 = (a, b) => a.map((n, i) => n - b[i]);\n  var scale2 = (a, s) => a.map((n) => n * s);\n  var dot2 = (a, b) => a.reduce((s, n, i) => s + n * b[i], 0);\n  var cross2 = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];\n  var multiply2 = (a, b) => [...add2(add2(scale2(b.slice(0, 3), a[3]), scale2(a.slice(0, 3), b[3])), cross2(a, b)), a[3] * b[3] - dot2(a.slice(0, 3), b.slice(0, 3))];\n  var rotate2 = (q, p) => add2(p, add2(scale2(cross2(q, p), q[3] * 2), scale2(cross2(q, cross2(q, p)), 2)));\n  var axis = (i, angle) => [...[0, 1, 2].map((k) => i === k ? Math.sin(angle * Math.PI / 360) : 0), Math.cos(angle * Math.PI / 360)];\n  var modelRotation = ([x, y, z]) => multiply2(axis(2, -z), multiply2(axis(1, y), axis(0, -x)));\n  var reflect = (p) => [p[0], p[1], -p[2]];\n  var reflectRotation = (q) => [-q[0], -q[1], q[2], q[3]];\n  var identity = () => ({ q: [0, 0, 0, 1], t: [0, 0, 0] });\n  var compose = (a, b) => ({ q: multiply2(a.q, b.q), t: add2(a.t, rotate2(a.q, b.t)) });\n  function boneTransform(bone) {\n    const pivot = bone.pivot ?? [0, 0, 0], q = modelRotation(bone.rotation ?? [0, 0, 0]);\n    return { q, t: sub2(pivot, rotate2(q, pivot)) };\n  }\n\n  // lang/en.json\n  var en_default = {\n    "ragdoll.title": "Simple Ragdoll",\n    "ragdoll.description": "Generate Bedrock ragdolls from entity models.",\n    "ragdoll.mode": "Ragdoll",\n    "ragdoll.pack": "Resource Pack",\n    "ragdoll.config": "Physics Configuration",\n    "ragdoll.menu_import": "Import Ragdoll Resource Pack...",\n    "ragdoll.menu_export": "Export Ragdoll Resource Pack...",\n    "ragdoll.menu_browser": "Ragdoll Entities...",\n    "ragdoll.tool_move": "Move",\n    "ragdoll.tool_move_tip": "Move the selected collision box, center of mass or joint",\n    "ragdoll.tool_resize": "Resize",\n    "ragdoll.tool_resize_tip": "Resize the selected collision box",\n    "ragdoll.tool_rotate": "Rotate",\n    "ragdoll.tool_rotate_tip": "Rotate the selected collision box or joint",\n    "ragdoll.play_preview": "Play Physics Preview",\n    "ragdoll.pause_preview": "Pause Physics Preview",\n    "ragdoll.reset_preview": "Reset Physics Preview",\n    "ragdoll.preview_animation": "Preview Ragdoll from Current Frame",\n    "ragdoll.preview_animation_tip": "Simulate physics starting from the current animation pose without writing keyframes",\n    "ragdoll.preview_locked": "Previewing. Reset the preview to edit.",\n    "ragdoll.empty_state_model": "This model has no ragdoll yet. Rigid bodies and joints can be generated from its bones.",\n    "ragdoll.empty_state_project": "Open a Bedrock entity model, or open an entity from a resource pack.",\n    "ragdoll.create_ragdoll": "Generate Ragdoll",\n    "ragdoll.panel_structure": "Ragdoll",\n    "ragdoll.panel_properties": "Physics Properties",\n    "ragdoll.variant_default": "Default",\n    "ragdoll.variant_tip": "Model to edit",\n    "ragdoll.section_models": "Models",\n    "ragdoll.variant_when": "Use the %0 model when",\n    "ragdoll.variant_default_note": "The %0 model is used when no condition matches.",\n    "ragdoll.section_entity": "Entity",\n    "ragdoll.scale": "Model Scale",\n    "ragdoll.scale_tip": "Effective in-game scale used to convert physics sizes. Reads scripts.scale automatically, defaults to 1 when undetermined, and can be edited manually.",\n    "ragdoll.section_trigger": "Trigger",\n    "ragdoll.trigger": "Become Ragdoll",\n    "ragdoll.release": "Recover",\n    "ragdoll.trigger_hurt": "When Hurt",\n    "ragdoll.release_healed": "When Fully Healed",\n    "ragdoll.custom": "Custom Molang",\n    "ragdoll.custom_condition": "Molang Condition",\n    "ragdoll.section_simulation": "Simulation",\n    "ragdoll.gravity": "Gravity (blocks/s²)",\n    "ragdoll.gravity_tip": "Downward acceleration in blocks per second squared.",\n    "ragdoll.section_performance": "Performance",\n    "ragdoll.performance_tip": "Higher values are more stable and cost more Molang time.",\n    "ragdoll.frequency": "Simulation Rate (Hz)",\n    "ragdoll.frequency_tip": "Physics steps computed per second.",\n    "ragdoll.iterations": "Solver Iterations",\n    "ragdoll.iterations_tip": "How many times contacts and joints are solved per step.",\n    "ragdoll.contact_limit": "Contact Limit",\n    "ragdoll.contact_limit_tip": "Maximum contact points handled per step.",\n    "ragdoll.section_collision": "Self-Collision",\n    "ragdoll.output_size": "Output File Size",\n    "ragdoll.output_size_tip": "Estimated size of the exported file. Smaller files have lower overhead, but the simulation is less stable.",\n    "ragdoll.output_standard": "Standard",\n    "ragdoll.output_light": "Light",\n    "ragdoll.output_medium": "Medium",\n    "ragdoll.output_heavy": "Heavy",\n    "ragdoll.collision_count": "%0 part pairs collide with each other",\n    "ragdoll.auto_collision": "Set Automatically",\n    "ragdoll.auto_collision_tip": "Checks all selected models. Initially overlapping parts and parts touching at a joint are excluded; all other parts collide.",\n    "ragdoll.section_pack": "Resource Pack",\n    "ragdoll.link_linked": "Exported into %0.",\n    "ragdoll.link_unloaded": "Import the resource pack of this entity before exporting.",\n    "ragdoll.link_standalone": "This model is not linked to an entity in a resource pack yet. Only the physics configuration can be exported.",\n    "ragdoll.link_entity": "Link Entity...",\n    "ragdoll.link_title": "Link Resource Pack Entity",\n    "ragdoll.link_tip": "The physics configuration moves to the chosen entity. Export keeps its animations, materials and textures; an edited model is written back to the pack.",\n    "ragdoll.link_button": "Link",\n    "ragdoll.link_none": "No entity in the resource pack uses model %0.",\n    "ragdoll.bone_follows": "Bones without a rigid body follow %0.",\n    "ragdoll.bone_free": "This bone has no rigid body and none above it, so it keeps its pose.",\n    "ragdoll.add_body": "Add Rigid Body",\n    "ragdoll.remove_body": "Remove Rigid Body",\n    "ragdoll.section_mass": "Mass",\n    "ragdoll.mass_mode": "Mass From",\n    "ragdoll.mass_density": "Density",\n    "ragdoll.mass_fixed": "Fixed Mass",\n    "ragdoll.density": "Density (kg/m³)",\n    "ragdoll.mass": "Mass (kg)",\n    "ragdoll.center": "Center of Mass",\n    "ragdoll.auto": "Auto",\n    "ragdoll.reset_auto": "Back to Automatic",\n    "ragdoll.per_model_note": "Mass, center of mass and collision boxes are stored per model.",\n    "ragdoll.section_material": "Material",\n    "ragdoll.friction": "Friction",\n    "ragdoll.restitution": "Bounciness",\n    "ragdoll.section_damping": "Damping",\n    "ragdoll.linear_damping": "Linear Damping",\n    "ragdoll.angular_damping": "Angular Damping",\n    "ragdoll.section_self_collision": "Collides With",\n    "ragdoll.self_collision_tip": "Checked parts block each other.",\n    "ragdoll.add_shape": "Add Collision Box",\n    "ragdoll.remove_shape": "Delete Collision Box",\n    "ragdoll.refit": "Refit",\n    "ragdoll.refit_tip": "Use one collision box around the cubes of this bone and of the bones below it without a rigid body.",\n    "ragdoll.shape_n": "Collision Box %0",\n    "ragdoll.position": "Position",\n    "ragdoll.size": "Size",\n    "ragdoll.rotation": "Rotation",\n    "ragdoll.orientation": "Orientation",\n    "ragdoll.add_joint": "Add Joint...",\n    "ragdoll.remove_joint": "Delete Joint",\n    "ragdoll.section_connection": "Connection",\n    "ragdoll.joint_parent": "to %0",\n    "ragdoll.joint_a": "Parent Body",\n    "ragdoll.joint_b": "Child Body",\n    "ragdoll.joint_body_tip": "After changing a body, the joint returns to the pivot of the child bone.",\n    "ragdoll.section_frame": "Joint",\n    "ragdoll.reset_position": "Back to Bone Pivot",\n    "ragdoll.reset_rotation": "Back to Bone Orientation",\n    "ragdoll.mismatch": "The two ends of this joint do not line up, so the parts are pulled together when the simulation starts.",\n    "ragdoll.align_joint": "Align Both Ends",\n    "ragdoll.section_limits": "Limits",\n    "ragdoll.swing": "Swing (°)",\n    "ragdoll.swing_tip": "Largest angle the child body may tilt away from the joint Y axis, shown as the green cone.",\n    "ragdoll.twist": "Twist (°)",\n    "ragdoll.twist_tip": "Largest twist around the joint Y axis, shown as the red fan.",\n    "ragdoll.drop_missing": "Remove rigid bodies whose bones no longer exist: %0",\n    "ragdoll.import_config": "Import Physics Configuration...",\n    "ragdoll.export_config": "Export Physics Configuration...",\n    "ragdoll.edit_label": "Edit ragdoll",\n    "ragdoll.replace_pack": "Import another resource pack? Open projects stay open; exports use the new pack.",\n    "ragdoll.browser_title": "Ragdoll Entities",\n    "ragdoll.no_pack": "No resource pack imported",\n    "ragdoll.import_pack_button": "Import Resource Pack...",\n    "ragdoll.replace_pack_button": "Replace Resource Pack...",\n    "ragdoll.export_button": "Export...",\n    "ragdoll.no_entities": "No entities",\n    "ragdoll.no_pack_hint": "Import a .mcpack or .zip to list its entities.",\n    "ragdoll.browser_hint": "Double-click to open an entity. Ragdolls are generated from the bones on import and can be adjusted after opening.",\n    "ragdoll.open": "Open",\n    "ragdoll.close": "Close",\n    "ragdoll.cancel": "Cancel",\n    "ragdoll.confirm": "Confirm",\n    "ragdoll.entity": "Entity",\n    "ragdoll.status_ready": "Configured",\n    "ragdoll.status_invalid": "Invalid configuration",\n    "ragdoll.status_unconfigured": "Cannot generate",\n    "ragdoll.status_missing": "Missing model",\n    "ragdoll.status_unsupported": "Not applicable",\n    "ragdoll.detail_missing": "Missing model: %0",\n    "ragdoll.detail_unsupported": "Projectiles, vehicles and similar entities do not get ragdolls.",\n    "ragdoll.export_title": "Export Ragdoll Resource Pack",\n    "ragdoll.export_no_pack": "Import the source resource pack before exporting.",\n    "ragdoll.pack_name": "Pack Name",\n    "ragdoll.export_entities": "Export %0 entities",\n    "ragdoll.select_all": "Select All",\n    "ragdoll.deselect_all": "Select None",\n    "ragdoll.export_unlinked": "These projects are not linked to a resource pack entity and are not exported: %0",\n    "ragdoll.export_confirm": "Export",\n    "ragdoll.reading": "Reading resource pack...",\n    "ragdoll.generating": "Generating: %0",\n    "ragdoll.exported": "Exported %0 entities.",\n    "ragdoll.error_title": "Ragdoll Error",\n    "ragdoll.preview_error": "Cannot Preview",\n    "ragdoll.error.number": "%0 must be a finite number between %1 and %2.",\n    "ragdoll.error.vector": "%0 must contain three numbers.",\n    "ragdoll.error.field": "%0: unsupported field %1.",\n    "ragdoll.error.molang": "%0 must be one Molang expression.",\n    "ragdoll.error.zero_axis": "%0 cannot be a zero vector.",\n    "ragdoll.error.integer": "%0 must be an integer.",\n    "ragdoll.error.tags": "Invalid tags: %0.",\n    "ragdoll.error.include_tags": "includeTags cannot be empty.",\n    "ragdoll.error.format": "Physics formatVersion must be 1.",\n    "ragdoll.error.body_count": "Use between 1 and 32 rigid bodies.",\n    "ragdoll.error.body_id": "Body identifiers must contain only letters, numbers and underscores.",\n    "ragdoll.error.variants": "The last model must be the only default model.",\n    "ragdoll.error.bone_name": "Invalid bone: %0.",\n    "ragdoll.error.duplicate_bone": "Bone is bound more than once: %0.",\n    "ragdoll.error.geometry": "Missing model: %0.",\n    "ragdoll.error.geometry_reference": "Client definition does not reference model: %0.",\n    "ragdoll.error.duplicate_geometry_bone": "Duplicate bones in %0.",\n    "ragdoll.error.bone_cycle": "Bone hierarchy cycle: %0.",\n    "ragdoll.error.bone_missing": "Missing bone: %0.",\n    "ragdoll.error.variant_body": "Unknown variant body: %0.",\n    "ragdoll.error.bone_in_geometry": "%0: missing bone %1.",\n    "ragdoll.error.variant_binding": "Model variants cannot change the bone binding of %0.",\n    "ragdoll.error.empty_shapes": "%0 has no collision shapes.",\n    "ragdoll.error.shape_type": "Unsupported collision shape: %0.",\n    "ragdoll.error.shape_size": "%0: collision dimensions must be positive.",\n    "ragdoll.error.joint_type": "Unsupported joint type: %0.",\n    "ragdoll.error.joint_body": "Invalid body references in joint %0.",\n    "ragdoll.error.variant_joint": "Unknown variant joint: %0.",\n    "ragdoll.error.topology": "Model variants must have matching body topology and collision box counts.",\n    "ragdoll.error.pairs": "collisionPairs must contain pairs of body identifiers.",\n    "ragdoll.error.pair_reference": "Invalid collision pair: %0.",\n    "ragdoll.error.pair_duplicate": "Duplicate collision pairs.",\n    "ragdoll.error.joint_order": "jointOrder must contain every joint exactly once.",\n    "ragdoll.error.chunk": "A single Molang loop or expression is too long (%0 / %1 characters).",\n    "ragdoll.error.expression": "Unsupported expression: %0.",\n    "ragdoll.error.preview_query": "Preview query is unavailable: %0.",\n    "ragdoll.error.unexpected": "%0",\n    "ragdoll.error.json": "Invalid JSON: %0.",\n    "ragdoll.error.archive_path": "Invalid archive path: %0.",\n    "ragdoll.error.archive_size": "Resource pack exceeds the import limit.",\n    "ragdoll.error.client_duplicate": "Duplicate entity: %0.",\n    "ragdoll.error.no_entities": "No entity definitions found.",\n    "ragdoll.error.already_generated": "Entity already contains generated ragdoll code: %0.",\n    "ragdoll.error.alias": "Animation alias already exists: %0.",\n    "ragdoll.error.selection": "Select at least one configured entity.",\n    "ragdoll.error.not_configured": "%0: physics configuration is missing.",\n    "ragdoll.error.missing_source": "Import the resource pack for %0.",\n    "ragdoll.error.nonuniform": "Preview does not support non-uniform or mirrored bone scales.",\n    "ragdoll.error.last_body": "At least one rigid body is required.",\n    "ragdoll.error.last_shape": "At least one collision box is required.",\n    "ragdoll.error.entity_missing": "Entity not found in resource pack: %0.",\n    "ragdoll.error.empty_model": "The model has no cubes, so no rigid bodies can be generated.",\n    "ragdoll.error.link_conflict": "%0 is already open in another project.",\n    "ragdoll.error.joint_duplicate": "These two rigid bodies are already connected by a joint.",\n    "ragdoll.select_models": "Select Models...",\n    "ragdoll.default_model": "Default Model",\n    "ragdoll.error.model_duplicate": "Each model alias can only be selected once."\n  };\n\n  // src/i18n.js\n  var format = (text, values) => text.replace(/%(\\d+)/g, (_, index) => String(values[index] ?? ""));\n  function t(key, values = []) {\n    const id = `ragdoll.${key}`;\n    if (typeof globalThis.tl === "function") return globalThis.tl(id, values, format(en_default[id] ?? id, values));\n    return format(en_default[id] ?? id, values);\n  }\n  var RagdollError = class extends Error {\n    constructor(key, values = []) {\n      super(t(`error.${key}`, values));\n      this.key = key;\n      this.values = values;\n    }\n  };\n  var fail = (key, values = []) => {\n    throw new RagdollError(key, values);\n  };\n\n  // src/core/model.mjs\n  var number = (v, label, min = -Infinity, max = Infinity) => typeof v === "number" && Number.isFinite(v) && v >= min && v <= max ? v : fail("number", [label, min, max]);\n  var vec = (v, label) => Array.isArray(v) && v.length === 3 ? v.map((n, i) => number(n, `${label}[${i}]`)) : fail("vector", [label]);\n  var keys = (o, allowed, label) => {\n    for (const k of Object.keys(o)) if (!allowed.includes(k)) fail("field", [label, k]);\n  };\n  var expression = (s, label) => typeof s === "string" && s.trim() && !/[;{}]/.test(s) ? s : fail("molang", [label]);\n  var select = (values) => values.every((v) => v === values[0]) ? values[0] : choose("v.variant", values);\n  var OUTPUT_LEVELS = ["heavy", "medium", "light", "standard"];\n  var normalizeAxis = (v, label) => {\n    const p = vec(v, label), n = Math.hypot(...p);\n    if (n < 1e-9) fail("zero_axis", [label]);\n    return p.map((x) => x / n);\n  };\n  function settings(input = {}) {\n    keys(input, ["frequency", "iterations", "contactLimit", "gravity", "poseTransition", "sleep", "terrain", "initialVelocity", "initialSpin"], "simulation");\n    const result = {\n      frequency: 20,\n      iterations: 6,\n      contactLimit: 128,\n      gravity: 9.82,\n      poseTransition: 0.4,\n      initialVelocity: [0.3, 0.1, 0.3],\n      initialSpin: 0,\n      sleep: { speed: 0.3125, seconds: 0.5, checkInterval: 0.5 },\n      terrain: { includeTags: ["minecraft:is_axe_item_destructible", "minecraft:is_hoe_item_destructible", "minecraft:is_pickaxe_item_destructible", "minecraft:is_shovel_item_destructible", "not_feature_replaceable"], excludeTags: ["water", "lava"], friction: 0.3, restitution: 0 },\n      ...input\n    };\n    result.sleep = { speed: 0.3125, seconds: 0.5, checkInterval: 0.5, ...input.sleep };\n    result.terrain = { includeTags: ["minecraft:is_axe_item_destructible", "minecraft:is_hoe_item_destructible", "minecraft:is_pickaxe_item_destructible", "minecraft:is_shovel_item_destructible", "not_feature_replaceable"], excludeTags: ["water", "lava"], friction: 0.3, restitution: 0, ...input.terrain };\n    keys(result.sleep, ["speed", "seconds", "checkInterval"], "sleep");\n    keys(result.terrain, ["includeTags", "excludeTags", "friction", "restitution"], "terrain");\n    for (const [k, min, max] of [["frequency", 5, 60], ["iterations", 1, 12], ["contactLimit", 8, 256], ["gravity", 0, 100], ["poseTransition", 1e-3, 10], ["initialSpin", 0, 100]]) number(result[k], k, min, max);\n    for (const k of ["iterations", "contactLimit"]) if (!Number.isInteger(result[k])) fail("integer", [k]);\n    vec(result.initialVelocity, "initialVelocity");\n    for (const k of ["speed", "seconds", "checkInterval"]) number(result.sleep[k], `sleep.${k}`, 1e-3, 100);\n    for (const key of ["includeTags", "excludeTags"]) {\n      if (!Array.isArray(result.terrain[key]) || result.terrain[key].some((t2) => typeof t2 !== "string" || !/^[\\w:.-]+$/.test(t2))) fail("tags", [key]);\n    }\n    if (!result.terrain.includeTags.length) fail("include_tags");\n    number(result.terrain.friction, "terrain.friction", 0, 10);\n    number(result.terrain.restitution, "terrain.restitution", 0, 1);\n    return result;\n  }\n  function normalizeModel(config, resources, client) {\n    keys(config, ["$schema", "formatVersion", "trigger", "release", "defaults", "simulation", "bodies", "joints", "collisionPairs", "jointOrder", "variants", "outputLevel", "outputs"], "physics");\n    if (config.outputs !== void 0 && (!Array.isArray(config.outputs) || config.outputs.some((key) => !["state", "bodies", "contacts", "liquids"].includes(key)))) fail("unexpected", [config.outputs]);\n    if (config.formatVersion !== 1) fail("format");\n    if (!OUTPUT_LEVELS.includes(config.outputLevel ?? "standard")) fail("unexpected", [config.outputLevel]);\n    const sim = settings(config.simulation), bodyIds = Object.keys(config.bodies ?? {});\n    if (!bodyIds.length || bodyIds.length > 32) fail("body_count");\n    if (bodyIds.some((id) => !/^[a-zA-Z_]\\w*$/.test(id))) fail("body_id");\n    const defaults = { friction: 0.3, restitution: 0, linearDamping: 0.01, angularDamping: 0.01, density: 1, ...config.defaults };\n    keys(defaults, ["friction", "restitution", "linearDamping", "angularDamping", "density"], "defaults");\n    const variants = config.variants ?? [{ geometry: "default", scale: 1 }];\n    if (!variants.length || variants.filter((v) => v.when === void 0).length !== 1 || variants.at(-1).when !== void 0) fail("variants");\n    const bones = bodyIds.map((id) => config.bodies[id].bone), bodyByBone = /* @__PURE__ */ new Map();\n    for (const [i, bone] of bones.entries()) {\n      if (typeof bone !== "string" || !bone || bone.includes("\'")) fail("bone_name", [bodyIds[i]]);\n      if (bodyByBone.has(bone)) fail("duplicate_bone", [bone]);\n      bodyByBone.set(bone, i);\n    }\n    const normalized = variants.map((variant, vi) => {\n      keys(variant, ["when", "geometry", "scale", "bodies", "joints"], `variants[${vi}]`);\n      if (variant.when !== void 0) expression(variant.when, "variant.when");\n      const geometryId = client.geometry?.[variant.geometry] ?? variant.geometry, geometry = resources.geometries.get(geometryId);\n      if (!geometry) fail("geometry", [geometryId]);\n      if (!Object.values(client.geometry ?? {}).includes(geometryId)) fail("geometry_reference", [geometryId]);\n      const visualScale = number(variant.scale ?? 1, "variant.scale", 1e-3, 100);\n      const boneMap = new Map(geometry.bones.map((b) => [b.name, b]));\n      if (boneMap.size !== geometry.bones.length) fail("duplicate_geometry_bone", [geometryId]);\n      const visit = (name, trail = []) => {\n        if (trail.includes(name)) fail("bone_cycle", [name]);\n        const b = boneMap.get(name);\n        if (!b) fail("bone_missing", [name]);\n        if (b.parent) visit(b.parent, [...trail, name]);\n      };\n      for (const name of boneMap.keys()) visit(name);\n      for (const key of Object.keys(variant.bodies ?? {})) if (!bodyIds.includes(key)) fail("variant_body", [key]);\n      const bodies2 = bodyIds.map((id, i) => {\n        const input = { ...config.bodies[id], ...variant.bodies?.[id] }, bone = boneMap.get(bones[i]);\n        if (!bone) fail("bone_in_geometry", [geometryId, bones[i]]);\n        keys(input, ["bone", "center", "mass", "density", "friction", "restitution", "linearDamping", "angularDamping", "shapes"], id);\n        if (input.bone !== bones[i]) fail("variant_binding", [id]);\n        const material = { ...defaults, ...input };\n        for (const k of ["friction", "density"]) number(material[k], `${id}.${k}`, k === "density" ? 1e-6 : 0, 1e9);\n        for (const k of ["restitution", "linearDamping", "angularDamping"]) number(material[k], `${id}.${k}`, 0, k === "restitution" ? 1 : 0.999999);\n        const rawShapes = input.shapes ?? (bone.cubes ?? []).filter((c) => c.size.every((n) => n + 2 * (c.inflate ?? 0) > 0)).map((c) => ({ type: "box", center: add2(c.origin, scale2(c.size, 0.5)), size: c.size.map((n) => n + 2 * (c.inflate ?? 0)), rotation: c.rotation, pivot: c.pivot }));\n        if (!rawShapes.length) fail("empty_shapes", [id]);\n        const boxes = rawShapes.map((s, j) => {\n          keys(s, ["type", "center", "size", "rotation", "pivot"], `${id}.shapes[${j}]`);\n          if (s.type !== "box") fail("shape_type", [s.type]);\n          const center2 = vec(s.center, `${id}.shape.center`), size = vec(s.size, `${id}.shape.size`), rotation = vec(s.rotation ?? [0, 0, 0], `${id}.shape.rotation`);\n          if (size.some((n) => n <= 0)) fail("shape_size", [id]);\n          const q = modelRotation(rotation), pivot = s.pivot ? vec(s.pivot, `${id}.shape.pivot`) : center2;\n          return { center: add2(pivot, rotate2(q, sub2(center2, pivot))), size, q, volume: size.reduce((a, b) => a * b, 1) };\n        });\n        const volume = boxes.reduce((n, b) => n + b.volume, 0), center = input.center ? vec(input.center, `${id}.center`) : [0, 1, 2].map((k) => boxes.reduce((n, b) => n + b.center[k] * b.volume, 0) / volume);\n        const mass = number(input.mass ?? material.density * volume * (visualScale / 16) ** 3, `${id}.mass`, 1e-12, 1e12);\n        const shapes2 = boxes.map((s) => ({ center: scale2(reflect(sub2(s.center, center)), visualScale), half: scale2(s.size, visualScale / 2), quaternion: reflectRotation(s.q) }));\n        const extents = shapes2.map((s) => [0, 1, 2].map((k) => [0, 1, 2].reduce((n, a) => n + Math.abs(rotate2(s.quaternion, [0, 1, 2].map((x) => x === a ? 1 : 0))[k]) * s.half[a], 0)));\n        const half = [0, 1, 2].map((k) => (Math.max(...shapes2.map((s, j) => s.center[k] + extents[j][k])) - Math.min(...shapes2.map((s, j) => s.center[k] - extents[j][k]))) / 2);\n        let parent = bone.parent, parentTransform = identity(), chain = [];\n        while (parent && !bodyByBone.has(parent)) {\n          chain.unshift(boneMap.get(parent));\n          parent = boneMap.get(parent).parent;\n        }\n        for (const b of chain) parentTransform = compose(parentTransform, boneTransform(b));\n        return {\n          id,\n          name: id,\n          bone: bones[i],\n          modelCenter: center,\n          pivot: bone.pivot ?? [0, 0, 0],\n          bindRotation: bone.rotation ?? [0, 0, 0],\n          parent: parent ? bodyByBone.get(parent) : -1,\n          parentTransform,\n          mass,\n          inverseMass: 1 / mass,\n          inverseInertia: half.map((_, k) => 3 / (mass * (half[(k + 1) % 3] ** 2 + half[(k + 2) % 3] ** 2))),\n          shapes: shapes2,\n          ...Object.fromEntries(["friction", "restitution", "linearDamping", "angularDamping"].map((k) => [k, material[k]]))\n        };\n      });\n      const joints2 = Object.entries(config.joints ?? {}).map(([id, base]) => {\n        const j = { ...base, ...variant.joints?.[id] };\n        keys(j, ["type", "a", "b", "anchorA", "anchorB", "axisA", "axisB", "twistAxisA", "twistAxisB", "swing", "twist", "transitionAnchorA", "transitionAnchorB"], `joint.${id}`);\n        if (j.type !== "coneTwist") fail("joint_type", [j.type]);\n        const a = bodyIds.indexOf(j.a), b = bodyIds.indexOf(j.b);\n        if (a < 0 || b < 0 || a === b) fail("joint_body", [id]);\n        const anchor = (side, index) => scale2(reflect(j["anchor" + side] ? vec(j["anchor" + side], id) : sub2(bodies2[b].pivot, bodies2[index].modelCenter)), visualScale / 16);\n        const axisA = reflect(normalizeAxis(j.axisA ?? [0, 1, 0], id)), axisB = reflect(normalizeAxis(j.axisB ?? j.axisA ?? [0, 1, 0], id));\n        const twistAxisA = reflect(normalizeAxis(j.twistAxisA ?? [-1, 0, 0], id)), twistAxisB = reflect(normalizeAxis(j.twistAxisB ?? j.twistAxisA ?? [-1, 0, 0], id));\n        return {\n          id,\n          a,\n          b,\n          anchorA: anchor("A", a),\n          anchorB: anchor("B", b),\n          axisA,\n          axisB,\n          twistAxisA,\n          twistAxisB,\n          transitionAnchorA: scale2(reflect(vec(j.transitionAnchorA ?? [0, 0, 0], id)), visualScale / 16),\n          transitionAnchorB: scale2(reflect(vec(j.transitionAnchorB ?? [0, 0, 0], id)), visualScale / 16),\n          swing: number(j.swing ?? 45, id, 0, 180),\n          twist: number(j.twist ?? 22.5, id, 0, 180)\n        };\n      });\n      for (const key of Object.keys(variant.joints ?? {})) if (!joints2.some((j) => j.id === key)) fail("variant_joint", [key]);\n      return { geometry: geometryId, when: variant.when, scale: visualScale, bodies: bodies2, joints: joints2 };\n    });\n    for (const v of normalized.slice(1)) for (let i = 0; i < bodyIds.length; i++) if (v.bodies[i].shapes.length !== normalized[0].bodies[i].shapes.length || v.bodies[i].parent !== normalized[0].bodies[i].parent) fail("topology");\n    const merge = (values) => {\n      if (Array.isArray(values[0])) return values[0].map((_, i) => merge(values.map((v) => v[i])));\n      if (values[0] && typeof values[0] === "object") return Object.fromEntries(Object.keys(values[0]).map((k) => [k, merge(values.map((v) => v[k]))]));\n      return select(values);\n    };\n    const bodies = merge(normalized.map((v) => v.bodies)), joints = merge(normalized.map((v) => v.joints));\n    const shapes = bodies.flatMap((b, body) => b.shapes.map((s, part) => ({ ...s, body, part })));\n    const collisionPairs = (config.collisionPairs ?? []).map((p) => {\n      if (!Array.isArray(p) || p.length !== 2) fail("pairs");\n      const pair = p.map((id) => bodyIds.indexOf(id));\n      if (pair.some((i) => i < 0) || pair[0] === pair[1]) fail("pair_reference", [p]);\n      return pair;\n    });\n    if (new Set(collisionPairs.map((p) => p.slice().sort().join(","))).size !== collisionPairs.length) fail("pair_duplicate");\n    const shapePairs = collisionPairs.flatMap(([a, b]) => shapes.flatMap((s, i) => s.body === a ? shapes.flatMap((t2, j) => t2.body === b ? [[i, j]] : []) : []));\n    const jointOrder = (config.jointOrder ?? joints.map((j) => j.id)).map((id) => joints.findIndex((j) => j.id === id));\n    if (jointOrder.some((i) => i < 0) || new Set(jointOrder).size !== joints.length || jointOrder.length !== joints.length) fail("joint_order");\n    return {\n      bodies,\n      joints,\n      shapes,\n      shapePairs,\n      jointOrder,\n      variants: normalized,\n      scale: select(normalized.map((v) => v.scale)),\n      simulation: sim,\n      outputs: config.outputs ?? [],\n      trigger: expression(config.trigger ?? "q.max_health>0&&q.health<q.max_health", "trigger"),\n      release: expression(config.release ?? "q.health>=q.max_health", "release")\n    };\n  }\n\n  // src/core/output.mjs\n  function outputModel(config, resources, client) {\n    const rig = normalizeModel(config, resources, client), level = config.outputLevel ?? "standard";\n    if (level === "standard") return rig;\n    const s = rig.simulation;\n    s.iterations = Math.max(1, Math.ceil(s.iterations / 3));\n    s.contactLimit = Math.min(s.contactLimit, Math.max(8, rig.shapes.length * 4, Math.floor(s.contactLimit / 2)));\n    if (level === "medium" || level === "heavy") rig.shapePairs = [];\n    if (level === "heavy") {\n      s.iterations = 1;\n      s.contactLimit = Math.min(s.contactLimit, Math.max(8, rig.shapes.length * 4));\n      rig.contactFriction = false;\n    }\n    return rig;\n  }\n\n  // src/core/parse.mjs\n  var forbidden = /* @__PURE__ */ new Set(["constructor", "prototype", "__proto__"]);\n  var aliases = { variable: "v", temp: "t", query: "q", context: "c" };\n  var precedence = { "??": 1, "||": 2, "&&": 3, "==": 4, "!=": 4, "<": 5, ">": 5, "<=": 5, ">=": 5, "+": 6, "-": 6, "*": 7, "/": 7, "%": 7 };\n  function parseExpression(source) {\n    if (typeof source === "number" || typeof source === "boolean") {\n      if (!Number.isFinite(Number(source))) fail("expression", [String(source)]);\n      return { kind: "value", value: Number(source) };\n    }\n    source = String(source);\n    const tokens = [];\n    let offset = 0, index = 0;\n    const pattern = /\\s*(?:(\\d*\\.\\d+|\\d+\\.?\\d*)([eE][+-]?\\d+)?|([a-zA-Z_]\\w*)|\'([^\'\\r\\n]*)\'|(\\?\\?|\\|\\||&&|==|!=|<=|>=|[+\\-*/%<>()!?:.,]))/y;\n    while (offset < source.length) {\n      pattern.lastIndex = offset;\n      const token = pattern.exec(source);\n      if (!token) {\n        if (!source.slice(offset).trim()) break;\n        fail("expression", [source.slice(offset, offset + 80)]);\n      }\n      offset = pattern.lastIndex;\n      tokens.push(token[1] !== void 0 ? { type: "value", value: Number(token[1] + (token[2] ?? "")) } : token[3] ? { type: "name", value: token[3] } : token[4] !== void 0 ? { type: "value", value: token[4] } : { type: "op", value: token[5] });\n    }\n    const invalid = () => fail("expression", [source.slice(0, 80)]);\n    const peek = (value) => tokens[index]?.value === value;\n    const take = (value) => {\n      if (!peek(value)) invalid();\n      index++;\n    };\n    const primary = () => {\n      const token = tokens[index++];\n      if (!token) invalid();\n      if (token.type === "value") {\n        if (typeof token.value === "number" && !Number.isFinite(token.value)) invalid();\n        return { kind: "value", value: token.value };\n      }\n      if (token.type === "op" && ["-", "+", "!"].includes(token.value)) return { kind: "unary", op: token.value, value: primary() };\n      if (token.value === "(") {\n        const result2 = parse(0);\n        take(")");\n        return result2;\n      }\n      if (token.type !== "name") invalid();\n      if (token.value === "true" || token.value === "false") return { kind: "value", value: Number(token.value === "true") };\n      const path = [aliases[token.value] ?? token.value];\n      while (peek(".")) {\n        index++;\n        const part = tokens[index++];\n        if (part?.type !== "name" || forbidden.has(part.value)) invalid();\n        path.push(part.value);\n      }\n      if (!["v", "t", "q", "math", "c"].includes(path[0]) || path.length < 2) invalid();\n      if (!peek("(")) return { kind: "read", path };\n      if (!["math", "q"].includes(path[0]) || path.length !== 2) invalid();\n      index++;\n      const args = [];\n      if (!peek(")")) {\n        do {\n          args.push(parse(0));\n          if (!peek(",")) break;\n          index++;\n        } while (true);\n      }\n      take(")");\n      return { kind: "call", path, args };\n    };\n    const parse = (min) => {\n      let left = primary();\n      while (index < tokens.length) {\n        const op = tokens[index].value, p = precedence[op];\n        if (p === void 0 || p < min) break;\n        index++;\n        left = { kind: "binary", op, left, right: parse(p + 1) };\n      }\n      if (min === 0 && peek("?")) {\n        index++;\n        const test = left, yes = parse(0);\n        take(":");\n        left = { kind: "if", test, yes, no: parse(0) };\n      }\n      return left;\n    };\n    const result = parse(0);\n    if (index !== tokens.length) invalid();\n    return result;\n  }\n\n  // src/core/compact.mjs\n  var expr = (e) => e.kind === "value" ? typeof e.value === "string" ? "\'" + e.value + "\'" : String(e.value) : e.kind === "read" ? e.path.join(".") : e.kind === "call" ? e.path.join(".") + "(" + e.args.map(expr).join(",") + ")" : e.kind === "unary" ? "(" + e.op + expr(e.value) + ")" : e.kind === "binary" ? "(" + expr(e.left) + e.op + expr(e.right) + ")" : "(" + expr(e.test) + "?" + expr(e.yes) + ":" + expr(e.no) + ")";\n  var same = (a) => a.every((x) => JSON.stringify(x) === JSON.stringify(a[0]));\n  function mergeExpr(values, index) {\n    if (same(values)) return expr(values[0]);\n    const first = values[0], kind = first.kind;\n    if (values.some((v) => v.kind !== kind)) return choose(index, values.map(expr));\n    if (kind === "binary" && values.every((v) => v.op === first.op)) return "(" + mergeExpr(values.map((v) => v.left), index) + first.op + mergeExpr(values.map((v) => v.right), index) + ")";\n    if (kind === "unary" && values.every((v) => v.op === first.op)) return "(" + first.op + mergeExpr(values.map((v) => v.value), index) + ")";\n    if (kind === "call" && values.every((v) => v.path.join(".") === first.path.join(".") && v.args.length === first.args.length)) return first.path.join(".") + "(" + first.args.map((_, i) => mergeExpr(values.map((v) => v.args[i]), index)).join(",") + ")";\n    if (kind === "if") return "(" + mergeExpr(values.map((v) => v.test), index) + "?" + mergeExpr(values.map((v) => v.yes), index) + ":" + mergeExpr(values.map((v) => v.no), index) + ")";\n    return choose(index, values.map(expr));\n  }\n  function mergeGroups(groups, index) {\n    if (!groups.length) return [];\n    groups = groups.map((g) => [g].flat(Infinity));\n    if (groups.some((g) => g.length !== groups[0].length)) throw new Error("Different block lengths");\n    const merge = (values) => same(values) ? values[0] : mergeExpr(values.map(parseExpression), index);\n    return groups[0].map((first, i) => {\n      const nodes = groups.map((g) => g[i]);\n      if (nodes.some((n) => n.kind !== first.kind)) throw new Error("Different nodes");\n      if (first.kind === "set") {\n        if (!nodes.every((n) => n.name === first.name)) throw new Error("Different targets " + nodes.map((n) => n.name));\n        return A(first.name, merge(nodes.map((n) => n.value)));\n      }\n      if (first.kind === "if") return If(merge(nodes.map((n) => n.test)), mergeGroups(nodes.map((n) => n.yes), index), mergeGroups(nodes.map((n) => n.no), index));\n      return Loop(merge(nodes.map((n) => n.count)), mergeGroups(nodes.map((n) => n.body), index));\n    });\n  }\n  function rewrite(nodes, replace) {\n    return [nodes].flat(Infinity).map((n) => n.kind === "set" ? A(replace(n.name), typeof n.value === "string" ? replace(n.value) : n.value) : n.kind === "if" ? If(replace(n.test), rewrite(n.yes, replace), rewrite(n.no, replace)) : Loop(typeof n.count === "string" ? replace(n.count) : n.count, rewrite(n.body, replace)));\n  }\n  function compactBegin(rig, original, capture, act) {\n    const index = "t.activation_index", bodies = rig.bodies, bodyIds = bodies.map((_, i) => i), joints = rig.joints, jointIds = joints.map((_, i) => i);\n    const captureGroups = capture.at(-1).map((g, i) => rewrite(g, (s) => s.replace(new RegExp("v\\\\.pose" + i + "([a-z]\\\\w*)", "g"), "v.capture_pose.$1")));\n    const newCapture = [capture.slice(0, -1), A(index, 0), Loop(bodies.length, [A("v.capture_pose", 0), mergeGroups(captureGroups, index), dispatch(index, bodyIds, (i) => A("v.pose" + i, "v.capture_pose")), A(index, index + "+1")])];\n    const bodyGroup = (groups, readPose) => {\n      const transformed = groups.map((g, i) => rewrite(g, (s) => s.replace(new RegExp("v\\\\.b" + i + "([a-z]\\\\w*)", "g"), "v.activate_body.$1").replace(new RegExp("v\\\\.pose" + i + "([a-z]\\\\w*)", "g"), "v.activate_pose.$1")));\n      return [A(index, 0), Loop(bodies.length, [\n        A("v.activate_body", choose(index, bodyIds.map((i) => "v.b" + i))),\n        ...readPose ? [A("v.activate_pose", choose(index, bodyIds.map((i) => "v.pose" + i)))] : [],\n        mergeGroups(transformed, index),\n        dispatch(index, bodyIds, (i) => A("v.b" + i, "v.activate_body")),\n        A(index, index + "+1")\n      ])];\n    };\n    act[4] = bodyGroup(act[4], true);\n    const jointGroups = act[5].map((g, i) => rewrite(g, (s) => s.replace(new RegExp("v\\\\.j" + i + "([a-z]\\\\w*)", "g"), "v.activate_joint.$1").replace(new RegExp("v\\\\.b" + joints[i].a + "([a-z]\\\\w*)", "g"), "v.activate_ja.$1").replace(new RegExp("v\\\\.b" + joints[i].b + "([a-z]\\\\w*)", "g"), "v.activate_jb.$1")));\n    act[5] = joints.length ? [A(index, 0), Loop(joints.length, [\n      A("v.activate_joint", choose(index, jointIds.map((i) => "v.j" + i))),\n      A("v.activate_ja", choose(index, joints.map((j) => "v.b" + j.a))),\n      A("v.activate_jb", choose(index, joints.map((j) => "v.b" + j.b))),\n      mergeGroups(jointGroups, index),\n      dispatch(index, jointIds, (i) => A("v.j" + i, "v.activate_joint")),\n      A(index, index + "+1")\n    ])] : [];\n    act[act.length - 1] = bodyGroup(act.at(-1), false);\n    const begin = structuredClone(original);\n    const inactive = begin.find((n) => n.kind === "if" && n.test === "!v.active");\n    inactive.yes.find((n) => n.kind === "if" && n.test === "v.frames>0").yes = newCapture.flat(Infinity);\n    inactive.yes.find((n) => n.kind === "if" && n.test !== "v.frames>0").yes = act.flat(Infinity);\n    return begin;\n  }\n  function compactOutput(rig, boneOutput2) {\n    const children = rig.bodies.flatMap((b, i) => b.parent >= 0 ? [i] : []);\n    if (!children.length) return [];\n    const merge = (values) => {\n      if (Array.isArray(values[0])) return values[0].map((_, i) => merge(values.map((v) => v[i])));\n      if (values[0] && typeof values[0] === "object") return Object.fromEntries(Object.keys(values[0]).map((k) => [k, merge(values.map((v) => v[k]))]));\n      return choose("t.output_index", values);\n    };\n    const fields = ["modelCenter", "pivot", "parentTransform", "bindRotation"];\n    const pick = (body) => Object.fromEntries(fields.map((k) => [k, body[k]]));\n    const fakeBodies = [merge(children.map((i) => pick(rig.bodies[i]))), merge(children.map((i) => pick(rig.bodies[rig.bodies[i].parent])))];\n    fakeBodies[0].parent = 1;\n    const mapNodes = (nodes, replace) => [nodes].flat(Infinity).map((n) => n.kind === "set" ? { ...n, name: replace(n.name), value: typeof n.value === "string" ? replace(n.value) : n.value } : n.kind === "if" ? { ...n, test: replace(n.test), yes: mapNodes(n.yes, replace), no: mapNodes(n.no, replace) } : { ...n, count: typeof n.count === "string" ? replace(n.count) : n.count, body: mapNodes(n.body, replace) });\n    const genericOutput = mapNodes(boneOutput2({ bodies: fakeBodies }, 0), (s) => s.replace(/v\\.render([01])(\\w+)/g, "v.output_render$1$2").replace(/v\\.out0(\\w+)/g, "t.output_result$1"));\n    const outputFields = axes.map((k) => "p" + k).concat(axes.map((k) => "r" + k));\n    const output = [A("t.output_index", 0), Loop(children.length, [\n      ...[0, 1].flatMap((p) => [...axes, ...quat.map((k) => "q" + k)].map((k) => A("v.output_render" + p + k, choose("t.output_index", children.map((i) => "v.render" + (p ? rig.bodies[i].parent : i) + k))))),\n      genericOutput,\n      dispatch("t.output_index", children, (i) => outputFields.map((k) => A("v.out" + i + k, "t.output_result" + k))),\n      A("t.output_index", "t.output_index+1")\n    ])];\n    return output;\n  }\n\n  // src/core/storage.mjs\n  var flatten = (nodes) => [nodes].flat(Infinity);\n  var walk = (nodes, visit) => {\n    for (const n of flatten(nodes)) {\n      visit(n);\n      if (n.kind === "if") {\n        walk(n.yes, visit);\n        walk(n.no, visit);\n      }\n      if (n.kind === "loop") walk(n.body, visit);\n    }\n  };\n  var print = (n) => n.kind === "read" ? n.path.join(".") : n.kind === "value" ? JSON.stringify(n.value) : n.kind === "call" ? n.path.join(".") + "(" + n.args.map(print).join(",") + ")" : n.kind === "unary" ? "(" + n.op + print(n.value) + ")" : n.kind === "binary" ? "(" + print(n.left) + n.op + print(n.right) + ")" : "(" + print(n.test) + "?" + print(n.yes) + ":" + print(n.no) + ")";\n  var roots = (n) => n.kind === "read" && n.path.length === 2 && n.path[0] === "v" ? [print(n)] : n.kind === "if" ? [...roots(n.yes), ...roots(n.no)] : [];\n  function prepareRecords(program) {\n    const schemas = /* @__PURE__ */ new Map(), assignments = [];\n    const all = [program.initialize, program.frame, program.rootOutputs];\n    walk(all, (n) => {\n      if (n.kind !== "set") return;\n      assignments.push({ ...n, expression: parseExpression(n.value) });\n      const match = /^(v\\.\\w+)\\.(\\w+)$/.exec(n.name);\n      if (match) {\n        if (!schemas.has(match[1])) schemas.set(match[1], /* @__PURE__ */ new Set());\n        schemas.get(match[1]).add(match[2]);\n      }\n    });\n    let changed = true;\n    while (changed) {\n      changed = false;\n      for (const n of assignments) {\n        if (!/^v\\.\\w+$/.test(n.name)) continue;\n        const linked = [n.name, ...roots(n.expression)];\n        if (linked.length < 2 || !linked.some((k) => schemas.has(k))) continue;\n        const fields = new Set(linked.flatMap((k) => [...schemas.get(k) ?? []]));\n        for (const k of linked) {\n          if (!schemas.has(k)) {\n            schemas.set(k, /* @__PURE__ */ new Set());\n            changed = true;\n          }\n          for (const f of fields) if (!schemas.get(k).has(f)) {\n            schemas.get(k).add(f);\n            changed = true;\n          }\n        }\n      }\n    }\n    const condition = (n) => ["binary", "unary", "if"].includes(n.kind) ? print(n).slice(1, -1) : print(n);\n    const direct = (name, n) => n.kind === "if" ? If(condition(n.test), direct(name, n.yes), direct(name, n.no)) : A(name, print(n));\n    const transform = (nodes) => flatten(nodes).map((n) => n.kind === "set" && schemas.has(n.name) && parseExpression(n.value).kind === "if" ? direct(n.name, parseExpression(n.value)) : n.kind === "if" ? If(n.test, transform(n.yes), transform(n.no)) : n.kind === "loop" ? Loop(n.count, transform(n.body)) : n);\n    const defaults = [...schemas].flatMap(([root, fields]) => [A(root, 0), ...[...fields].map((field) => A(root + "." + field, 0))]);\n    const initialized = /* @__PURE__ */ new Set();\n    walk(program.initialize, (n) => {\n      if (n.kind === "set") initialized.add(n.name);\n    });\n    for (const n of assignments) if (/^v\\.\\w+$/.test(n.name) && !schemas.has(n.name) && !initialized.has(n.name)) {\n      defaults.push(A(n.name, 0));\n      initialized.add(n.name);\n    }\n    return { ...program, initialize: [...defaults, ...transform(program.initialize)], frame: program.frame.map(transform), rootOutputs: program.rootOutputs.map(transform) };\n  }\n  var scalarName = (value) => typeof value === "string" ? value.replace(/\\bv\\.(\\w+)\\.(\\w+)/g, (_, root, field) => "v." + root + (/^(?:[bcdsj]|pose)\\d+$/.test(root) ? "" : "_") + field) : value;\n  function lowerRecords(input) {\n    const program = prepareRecords(input);\n    const fields = /* @__PURE__ */ new Map();\n    walk(program.initialize, (n) => {\n      const match = n.kind === "set" && /^(v\\.\\w+)\\.(\\w+)$/.exec(n.name);\n      if (match) {\n        if (!fields.has(match[1])) fields.set(match[1], []);\n        if (!fields.get(match[1]).includes(match[2])) fields.get(match[1]).push(match[2]);\n      }\n    });\n    const transform = (nodes) => [nodes].flat(Infinity).flatMap((n) => {\n      if (n.kind === "if") {\n        const yes = transform(n.yes), no = transform(n.no);\n        if (!yes.length && !no.length) return [];\n        return yes.length ? If(scalarName(n.test), yes, no) : If("!(" + scalarName(n.test) + ")", no);\n      }\n      if (n.kind === "loop") {\n        const body = transform(n.body);\n        return body.length && Number(n.count) !== 0 ? Loop(scalarName(n.count), body) : [];\n      }\n      if (fields.has(n.name)) {\n        if (Number(n.value) === 0) return fields.get(n.name).map((f) => A(scalarName(n.name + "." + f), 0));\n        if (!fields.has(n.value)) throw new Error("Unsupported record assignment: " + n.name + "=" + n.value);\n        return fields.get(n.name).map((f) => A(scalarName(n.name + "." + f), scalarName(n.value + "." + f)));\n      }\n      return A(scalarName(n.name), scalarName(n.value));\n    });\n    const initialize = transform(program.initialize), last = /* @__PURE__ */ new Map();\n    initialize.forEach((n, i) => {\n      if (n.kind === "set") last.set(n.name, i);\n    });\n    return { initialize: initialize.filter((n, i) => n.kind !== "set" || last.get(n.name) === i), frame: program.frame.map(transform), rootOutputs: program.rootOutputs.map(transform) };\n  }\n  function groupVariables(nodes) {\n    const convert = (value) => typeof value === "string" ? value.replace(/\\bv\\.((?:[bcdsj]|pose)\\d+)([a-z]\\w*)/g, "v.$1.$2") : value;\n    return [nodes].flat(Infinity).map((n) => n.kind === "set" ? A(convert(n.name), convert(n.value)) : n.kind === "if" ? If(convert(n.test), groupVariables(n.yes), groupVariables(n.no)) : Loop(convert(n.count), groupVariables(n.body)));\n  }\n\n  // src/core/minify.mjs\n  var publicNames = /* @__PURE__ */ new Map([\n    ["v.active", "v.ragdoll_active"],\n    ["v.model_scale", "v.ragdoll_model_scale"],\n    ["v.variant", "v.ragdoll_variant"]\n  ]);\n  var short = (index) => {\n    const first = "abcdefghijklmnopqrstuvwxyz", rest = first + "0123456789";\n    let name = first[index % 26];\n    index = Math.floor(index / 26);\n    while (index) {\n      index--;\n      name += rest[index % 36];\n      index = Math.floor(index / 36);\n    }\n    return name;\n  };\n  var ranked = (counts) => [...counts].sort((a, b) => b[1] - a[1]).map(([name]) => name);\n  var occurrences = (text, scope) => {\n    const counts = /* @__PURE__ */ new Map(), pattern = new RegExp("\'[^\']*\'|(?<![\\\\w.])" + scope + "\\\\.\\\\w+", "g");\n    for (const [name] of text.matchAll(pattern)) if (!name.startsWith("\'")) counts.set(name, (counts.get(name) ?? 0) + 1);\n    return ranked(counts);\n  };\n  function minifier({ frequencyText = "", reservedNames = [], externalNames = [] } = {}) {\n    const roots2 = /* @__PURE__ */ new Map(), reserved = /* @__PURE__ */ new Set([...reservedNames, ...externalNames]), external = new Set(externalNames);\n    let count = 0;\n    const variable = (name) => {\n      if (roots2.has(name)) return roots2.get(name);\n      let output = external.has(name) || name.startsWith("v.ragdoll_") ? name : publicNames.get(name);\n      if (!output) do {\n        output = "v." + short(count++);\n      } while (reserved.has(output));\n      roots2.set(name, output);\n      return output;\n    };\n    for (const name of occurrences(frequencyText, "v")) variable(name);\n    const run = (text) => {\n      const temps = new Map(occurrences(text, "t").map((name, i) => [name, "t." + short(i)]));\n      let result = text.replace(/\'[^\']*\'|(?<![\\w.])[vt]\\.\\w+/g, (name) => name.startsWith("\'") ? name : name.startsWith("v.") ? variable(name) : temps.get(name));\n      result = result.replace(/\'[^\']*\'|(?<![\\w.])(?:\\d+\\.\\d*|\\.\\d+|\\d+)(?:e[+-]?\\d+)?/gi, (token) => {\n        if (token.startsWith("\'")) return token;\n        const value = Number(token), options = [token, String(value).replace(/^0\\./, "."), value.toExponential().replace("e+", "e")];\n        return options.filter((s) => Number(s) === value).sort((a, b) => a.length - b.length)[0];\n      });\n      return result.replace(/\'[^\']*\'|(?<![\\w.])\\(((?:\\d+\\.?\\d*|\\.\\d+)(?:e[+-]?\\d+)?)\\)/gi, (token, number2) => number2 ?? token);\n    };\n    run.roots = roots2;\n    return run;\n  }\n\n  // src/core/chunks.mjs\n  var temporaries = (value) => String(value).match(/(?<![\\w.])t\\.\\w+/g) ?? [];\n  var union = (...sets) => new Set(sets.flatMap((set2) => [...set2]));\n  function liveBefore(nodes, after = /* @__PURE__ */ new Set()) {\n    let live = new Set(after);\n    for (const node of nodes.flat(Infinity).reverse()) {\n      if (node.kind === "set") {\n        live.delete(node.name);\n        live = union(live, temporaries(node.value));\n      } else if (node.kind === "if") {\n        live = union(liveBefore(node.yes, live), liveBefore(node.no, live), temporaries(node.test));\n      } else {\n        let previous;\n        do {\n          previous = live;\n          live = union(live, liveBefore(node.body, live));\n        } while (live.size !== previous.size);\n        live = union(live, temporaries(node.count));\n      }\n    }\n    return live;\n  }\n  function replaceTemporaries(nodes, replacements) {\n    const replace = (value) => typeof value === "string" ? value.replace(/(?<![\\w.])t\\.\\w+/g, (name) => replacements.get(name) ?? name) : value;\n    return nodes.flat(Infinity).map((node) => node.kind === "set" ? { ...node, name: replace(node.name), value: replace(node.value) } : node.kind === "if" ? { ...node, test: replace(node.test), yes: replaceTemporaries(node.yes, replacements), no: replaceTemporaries(node.no, replacements) } : { ...node, count: replace(node.count), body: replaceTemporaries(node.body, replacements) });\n  }\n  function splitStatements(nodes, source, { limit = 64e3, target = limit - 2e3, prefix = "chunk" } = {}) {\n    let gate = 0, temporary = 0;\n    const partition = (nodes2, budget = limit) => {\n      const result = [];\n      let batch = [], estimate = 0;\n      const flush = () => {\n        if (!batch.length) return;\n        const current = batch;\n        batch = [];\n        estimate = 0;\n        if (source(current).length <= budget) result.push(current);\n        else if (current.length > 1) {\n          const middle = Math.floor(current.length / 2);\n          result.push(...partition(current.slice(0, middle), budget), ...partition(current.slice(middle), budget));\n        } else fail("chunk", [source(current).length, budget]);\n      };\n      for (const node of nodes2.flat(Infinity)) {\n        const size = source([node]).length;\n        if (size > budget) {\n          flush();\n          if (node.kind === "loop" && Number.isInteger(Number(node.count)) && Number(node.count) >= 0 && Number(node.count) <= 4096) {\n            result.push(...partition(Array.from({ length: Number(node.count) }, () => node.body).flat(), budget));\n            continue;\n          }\n          if (node.kind !== "if") fail("chunk", [size, budget]);\n          const flag = `v.${prefix}_gate${gate++}`;\n          result.push([A(flag, `(${node.test})?1:0`)]);\n          for (const [test, branch] of [[flag, node.yes], [`!${flag}`, node.no]]) {\n            const overhead = source([If(test, [])]).length;\n            result.push(...partition(branch, budget - overhead).map((part) => [If(test, part)]));\n          }\n        } else {\n          if (batch.length && estimate + size > Math.min(target, budget)) flush();\n          batch.push(node);\n          estimate += size;\n        }\n      }\n      flush();\n      return result;\n    };\n    let chunks = partition(nodes);\n    while (chunks.length > 1) {\n      const shared = union(...chunks.slice(1).map((chunk) => liveBefore(chunk)));\n      if (!shared.size) break;\n      const replacements = new Map([...shared].map((name) => [name, `v.${prefix}_temp${temporary++}`]));\n      chunks = chunks.flatMap((chunk) => partition(replaceTemporaries(chunk, replacements)));\n    }\n    return chunks;\n  }\n\n  // src/core/control.mjs\n  var materialName = (i, key) => `v.material_${i}_${key.toLowerCase()}`;\n  var materialValue = (rig, i, key) => `(v.has_material?${materialName(i, key)}:(${rig.bodies[i][key]}))`;\n  var inverseMass = (rig, i) => `(v.has_material?1/${materialName(i, "mass")}:(${rig.bodies[i].inverseMass}))`;\n  var inverseInertia = (rig, i, k) => `(v.has_material?(${rig.bodies[i].inverseInertia[k]})*(${rig.bodies[i].mass})/${materialName(i, "mass")}:(${rig.bodies[i].inverseInertia[k]}))`;\n  var states = [...axes, ...axes.map((k) => "v" + k), ...axes.map((k) => "w" + k), ...quat.map((k) => "q" + k)];\n  var tensorKeys = ["xx", "yy", "zz", "xy", "xz", "yz"];\n  function controls(rig, ids) {\n    const bodies = rig.bodies, indices = bodies.map((_, i) => i);\n    const pick = (values, index = "t.input_body_index") => choose(index, values);\n    const load = (out, index = "t.input_body_index") => states.map((k) => A(out + k, pick(indices.map((i) => "v.b" + i + k), index)));\n    const save = (prefix, keys2 = states) => dispatch("t.input_body_index", indices, (i) => keys2.map((k) => A("v.b" + i + k, prefix + k)));\n    const mass = (index) => pick(indices.map((i) => materialValue(rig, i, "mass")), index);\n    const inertia = (prefix, index) => [\n      ...axes.map((k, j) => [\n        vector("t.rigid_axis", axes.map((_, i) => Number(i === j))),\n        rotate(prefix + "u" + j, prefix + "q", "t.rigid_axis"),\n        A(prefix + "inertia" + j, `1/((${pick(indices.map((i) => inverseInertia(rig, i, j)), index)})*256)`)\n      ]),\n      ...tensorKeys.map((pair) => A(prefix + "i" + pair, [0, 1, 2].map((j) => `${prefix}u${j}${pair[0]}*${prefix}u${j}${pair[1]}*${prefix}inertia${j}`).join("+")))\n    ];\n    const matrix = (out, prefix, vec2) => axes.map((k, i) => A(out + k, axes.map((l, j) => `${prefix}${tensorKeys.find((s) => s === k + l || s === l + k)}*${vec2}${l}`).join("+")));\n    const aggregate = () => [\n      A("t.total_mass", 0),\n      vector("t.center", [0, 0, 0]),\n      vector("t.meanv", [0, 0, 0]),\n      A("t.rigid_index", 0),\n      Loop(bodies.length, [\n        A("t.rigid_mass", mass("t.rigid_index")),\n        load("t.rigid_", "t.rigid_index"),\n        A("t.total_mass", "t.total_mass+t.rigid_mass"),\n        ...axes.flatMap((k) => [\n          A("t.center" + k, `t.center${k}+t.rigid_${k}*t.rigid_mass`),\n          A("t.meanv" + k, `t.meanv${k}+t.rigid_v${k}*t.rigid_mass`)\n        ]),\n        A("t.rigid_index", "t.rigid_index+1")\n      ]),\n      scale("t.center", "t.center", "1/t.total_mass"),\n      scale("t.meanv", "t.meanv", "1/t.total_mass"),\n      ...tensorKeys.map((k) => A("t.total_i" + k, 0)),\n      vector("t.angular_momentum", [0, 0, 0]),\n      A("t.rigid_index", 0),\n      Loop(bodies.length, [\n        load("t.rigid_", "t.rigid_index"),\n        A("t.rigid_mass", mass("t.rigid_index")),\n        inertia("t.rigid_", "t.rigid_index"),\n        sub("t.rigid_r", "t.rigid_", "t.center"),\n        ...tensorKeys.map((pair) => A("t.total_i" + pair, `t.total_i${pair}+t.rigid_i${pair}+t.rigid_mass*(${pair[0] === pair[1] ? axes.filter((k) => k !== pair[0]).map((k) => "t.rigid_r" + k + "*t.rigid_r" + k).join("+") : "-t.rigid_r" + pair[0] + "*t.rigid_r" + pair[1]})`)),\n        sub("t.rigid_momentum", "t.rigid_v", "t.meanv"),\n        scale("t.rigid_momentum", "t.rigid_momentum", "t.rigid_mass"),\n        cross("t.rigid_orbital", "t.rigid_r", "t.rigid_momentum"),\n        matrix("t.rigid_spin", "t.rigid_i", "t.rigid_w"),\n        ...axes.map((k) => A("t.angular_momentum" + k, `t.angular_momentum${k}+t.rigid_spin${k}+t.rigid_orbital${k}`)),\n        A("t.rigid_index", "t.rigid_index+1")\n      ]),\n      A("t.inertia_scale", "math.max(0.000000000000000000000000000001,math.max(t.total_ixx,math.max(t.total_iyy,t.total_izz)))"),\n      ...tensorKeys.map((k) => A("t.total_i" + k, `t.total_i${k}/t.inertia_scale`)),\n      A("t.cofactorxx", "t.total_iyy*t.total_izz-t.total_iyz*t.total_iyz"),\n      A("t.cofactoryy", "t.total_ixx*t.total_izz-t.total_ixz*t.total_ixz"),\n      A("t.cofactorzz", "t.total_ixx*t.total_iyy-t.total_ixy*t.total_ixy"),\n      A("t.cofactorxy", "t.total_ixz*t.total_iyz-t.total_ixy*t.total_izz"),\n      A("t.cofactorxz", "t.total_ixy*t.total_iyz-t.total_ixz*t.total_iyy"),\n      A("t.cofactoryz", "t.total_ixy*t.total_ixz-t.total_ixx*t.total_iyz"),\n      A("t.determinant", "math.max(0.000000000000000000000001,t.total_ixx*t.cofactorxx+t.total_ixy*t.cofactorxy+t.total_ixz*t.cofactorxz)"),\n      ...tensorKeys.map((k) => A("t.total_inverse" + k, `t.cofactor${k}/t.determinant/t.inertia_scale`)),\n      matrix("t.meanw", "t.total_inverse", "t.angular_momentum")\n    ];\n    const angularResponse = (out, prefix, index, torque) => [\n      scale("t.response_q", prefix + "q", -1),\n      A("t.response_qw", prefix + "qw"),\n      rotate("t.response_local", "t.response_q", torque),\n      ...axes.map((k, j) => A("t.response_local" + k, `t.response_local${k}*(${pick(indices.map((i) => inverseInertia(rig, i, j)), index)})*256`)),\n      rotate(out, prefix + "q", "t.response_local")\n    ];\n    function apply(kind, factor = 1) {\n      const force = kind === "force", root = rig.bodies.findIndex((b) => b.parent < 0);\n      const velocity = [\n        If("t.input_linear", If("!t.input_part&&!t.input_angular", axes.map((k) => A("t.body_v" + k, `t.body_v${k}+t.input_${k}-t.meanv${k}`)), copy("t.body_v", "t.input_"))),\n        If("t.input_angular", [\n          If("!t.input_part", [\n            sub("t.body_r", "t.body_", "t.center"),\n            If("t.input_linear", copy("t.change_w", "t.input_a"), sub("t.change_w", "t.input_a", "t.meanw")),\n            cross("t.orbital_velocity", "t.change_w", "t.body_r"),\n            add("t.body_v", "t.body_v", "t.orbital_velocity")\n          ]),\n          copy("t.body_w", "t.input_a")\n        ])\n      ];\n      const transform = [\n        If("t.input_part", [\n          If("t.input_linear", axes.map((k) => A("t.body_" + k, `t.input_${k}-v.o${k}`))),\n          If("t.input_rotation", copy("t.body_q", "t.input_q", quat))\n        ], [\n          sub("t.body_r", "t.body_", "t.center"),\n          If("t.input_rotation", [rotate("t.body_r", "t.transform_q", "t.body_r"), multiply("t.body_q", "t.transform_q", "t.body_q")]),\n          ...axes.map((k) => A("t.body_" + k, `t.body_r${k}+(t.input_linear?t.input_${k}-v.o${k}:t.center${k})`))\n        ])\n      ];\n      const impulse = [\n        If("t.input_part", [\n          ...axes.map((k) => A("t.body_v" + k, `t.body_v${k}+t.input_${k}*(${pick(indices.map((i) => inverseMass(rig, i)))})*${factor}`)),\n          copy("t.action_torque", "t.input_a"),\n          If("t.input_point", [\n            ...axes.map((k) => A("t.action_r" + k, `t.input_p${k}-v.o${k}-t.body_${k}`)),\n            cross("t.action_offset", "t.action_r", "t.input_"),\n            add("t.action_torque", "t.action_torque", "t.action_offset")\n          ]),\n          angularResponse("t.action_spin", "t.body_", "t.input_body_index", "t.action_torque"),\n          ...axes.map((k) => A("t.body_w" + k, `t.body_w${k}+t.action_spin${k}*${factor}`))\n        ], [\n          sub("t.body_r", "t.body_", "t.center"),\n          cross("t.orbital_velocity", "t.action_spin", "t.body_r"),\n          ...axes.flatMap((k) => [A("t.body_v" + k, `t.body_v${k}+t.input_${k}/t.total_mass*${factor}+t.orbital_velocity${k}`), A("t.body_w" + k, `t.body_w${k}+t.action_spin${k}`)])\n        ])\n      ];\n      return [\n        If("!t.input_part", [\n          aggregate(),\n          ...!force ? [If("t.input_kind==3&&t.input_rotation", [\n            ...axes.map((k) => A("t.transform_inverse" + k, `-v.b${root}q${k}`)),\n            A("t.transform_inversew", `v.b${root}qw`),\n            multiply("t.transform_q", "t.input_q", "t.transform_inverse")\n          ])] : [],\n          If(force ? "t.input_force_index>=0" : "t.input_kind==2", [\n            copy("t.action_torque", "t.input_a"),\n            If("t.input_point", [\n              ...axes.map((k) => A("t.action_r" + k, `t.input_p${k}-v.o${k}-t.center${k}`)),\n              cross("t.action_offset", "t.action_r", "t.input_"),\n              add("t.action_torque", "t.action_torque", "t.action_offset")\n            ]),\n            matrix("t.action_spin", "t.total_inverse", "t.action_torque"),\n            scale("t.action_spin", "t.action_spin", factor)\n          ])\n        ]),\n        A("t.input_body_index", 0),\n        Loop(bodies.length, [If(`t.input_part==0||t.input_part==(${pick(ids)})`, [\n          load("t.body_"),\n          force ? impulse : If("t.input_kind==1", velocity, If("t.input_kind==3", transform, impulse)),\n          save("t.body_"),\n          ...!force ? [If("t.input_kind==3", dispatch("t.input_body_index", indices, (i) => [...axes, ...quat.map((k) => "q" + k)].flatMap((k) => [A(`v.b${i}prev${k}`, "t.body_" + k), A(`v.b${i}old${k}`, "t.body_" + k)])))] : []\n        ]), A("t.input_body_index", "t.input_body_index+1")])\n      ];\n    }\n    return { apply, aggregate, angularResponse, load, save };\n  }\n\n  // simple_ragdoll/BP/scripts/ragdoll.js\n  var INPUT_ANIMATION = "animation.simple_ragdoll.input";\n  var MAX_TERRAIN_BOXES = 64;\n  var MAX_MOTIONS = 32;\n  var MAX_FORCES = 16;\n  var MAX_PROPERTIES = 33;\n  var MAX_JOINTS = 64;\n  var MAX_LIQUIDS = 16;\n  var PROPERTY_FIELDS = ["mass", "friction", "restitution", "linearDamping", "angularDamping"];\n  var MOTION_FIELDS = ["seq", "kind", "part", "linear", "x", "y", "z", "angular", "ax", "ay", "az", "point", "px", "py", "pz", "rotation", "qx", "qy", "qz", "qw"];\n  var FORCE_FIELDS = ["part", "x", "y", "z", "point", "px", "py", "pz", "ax", "ay", "az"];\n  function partKey(name) {\n    if (name === void 0) return 0;\n    if (typeof name !== "string" || !name.length) throw new TypeError("part");\n    let hash = 2166136261;\n    for (let i = 0; i < name.length; i++) hash = Math.imul(hash ^ name.charCodeAt(i), 16777619);\n    return (hash >>> 0) % 16777215 + 1;\n  }\n\n  // src/core/input.mjs\n  var terrainFields = ["minx", "miny", "minz", "maxx", "maxy", "maxz", "friction", "restitution"];\n  var liquidFields = ["minx", "miny", "minz", "maxx", "maxy", "maxz", "density", "drag", "angulardrag"];\n  var slots = (size) => Array.from({ length: size }, (_, i) => i);\n  function terrainValue(index, field) {\n    return choose(index, slots(MAX_TERRAIN_BOXES).map((i) => `v.external_terrain_${i}_${field}`));\n  }\n  function createInputs(rig) {\n    const bodies = rig.bodies, ids = bodies.map((b) => partKey(b.id)), jointIds = rig.joints.map((j) => partKey(j.id)), control = controls(rig, ids);\n    if (new Set(ids).size !== ids.length || new Set(jointIds).size !== jointIds.length) throw new Error("Ragdoll identifiers have conflicting input keys");\n    const initialize = [\n      set("v.ragdoll_", {\n        protocol: 1,\n        session_high: 0,\n        session_low: 0,\n        revision: 0,\n        control_mode: 0,\n        simulation_gravity: -1,\n        simulation_gravity_vector: 0,\n        simulation_gx: 0,\n        simulation_gy: 0,\n        simulation_gz: 0,\n        simulation_time_scale: 1,\n        simulation_iterations: 0,\n        simulation_collisions: 1,\n        simulation_friction: 1,\n        simulation_joints: 1,\n        terrain_mode: 0,\n        terrain_count: 0,\n        liquid_count: 0,\n        property_count: 0,\n        joint_count: 0,\n        force_count: 0,\n        motion_first: 1,\n        motion_last: 0,\n        motion_ack: 0,\n        motion_dropped: 0\n      }),\n      A("v.input_revision", 0),\n      A("v.input_session_high", 0),\n      A("v.input_session_low", 0),\n      A("v.material_variant", -1),\n      A("v.material_revision", -1),\n      slots(MAX_TERRAIN_BOXES).map((i) => set(`v.ragdoll_terrain_${i}_`, Object.fromEntries(terrainFields.map((k) => [k, ["friction", "restitution"].includes(k) ? -1 : 0])))),\n      slots(MAX_LIQUIDS).map((i) => set(`v.ragdoll_liquid_${i}_`, Object.fromEntries(liquidFields.map((k) => [k, 0])))),\n      slots(MAX_MOTIONS).map((i) => set(`v.ragdoll_motion_${i}_`, Object.fromEntries(MOTION_FIELDS.map((k) => [k, k === "qw" ? 1 : 0])))),\n      slots(MAX_FORCES).map((i) => set(`v.ragdoll_force_${i}_`, Object.fromEntries(FORCE_FIELDS.map((k) => [k, 0])))),\n      slots(MAX_PROPERTIES).map((i) => set(`v.ragdoll_property_${i}_`, { part: 0, ...Object.fromEntries(PROPERTY_FIELDS.map((k) => [k.toLowerCase(), -1])) })),\n      slots(MAX_JOINTS).map((i) => set(`v.ragdoll_joint_${i}_`, { id: 0, enabled: 1 })),\n      bodies.map((_, i) => PROPERTY_FIELDS.map((key) => A(materialName(i, key), 0))),\n      rig.joints.map((_, i) => A(`v.joint_enabled_${i}`, 1))\n    ];\n    const frame = [\n      A("v.has_material", "v.ragdoll_property_count>0"),\n      ["gravity", "iterations", "collisions", "friction", "joints"].map((key) => A("v.simulation_" + key, "v.ragdoll_simulation_" + key)),\n      A("v.gravity_pixels", `v.simulation_gravity<0?${rig.simulation.gravity * 16}:math.clamp(v.simulation_gravity,0,100)*16`),\n      A("v.gravity_step", `v.simulation_gravity<0?${1 / rig.simulation.frequency * (rig.simulation.gravity * 16)}:math.clamp(v.simulation_gravity,0,100)*${16 / rig.simulation.frequency}`),\n      axes.map((k) => A("v.gravity_" + k, `v.ragdoll_simulation_gravity_vector?v.ragdoll_simulation_g${k}:${k === "y" ? "-v.gravity_pixels/16" : "0"}`)),\n      axes.map((k) => A("v.gravity_step_" + k, `v.gravity_${k}*${16 / rig.simulation.frequency}`)),\n      If("v.input_revision!=v.ragdoll_revision||v.input_session_high!=v.ragdoll_session_high||v.input_session_low!=v.ragdoll_session_low", [\n        A("v.input_revision", "v.ragdoll_revision"),\n        A("v.input_session_high", "v.ragdoll_session_high"),\n        A("v.input_session_low", "v.ragdoll_session_low"),\n        A("v.sleep", 0),\n        A("v.material_revision", -1),\n        slots(MAX_TERRAIN_BOXES).map((i) => terrainFields.map((key) => A(`v.external_terrain_${i}_${key}`, ["friction", "restitution"].includes(key) ? `v.ragdoll_terrain_${i}_${key}<0?${rig.simulation.terrain[key]}:v.ragdoll_terrain_${i}_${key}` : `v.ragdoll_terrain_${i}_${key}`)))\n      ]),\n      If("v.ragdoll_motion_ack<v.ragdoll_motion_first-1", [\n        A("v.ragdoll_motion_dropped", "v.ragdoll_motion_dropped+v.ragdoll_motion_first-1-v.ragdoll_motion_ack"),\n        A("v.ragdoll_motion_ack", "v.ragdoll_motion_first-1")\n      ])\n    ];\n    const property = (key) => choose("t.property_index", slots(MAX_PROPERTIES).map((i) => `v.ragdoll_property_${i}_${key.toLowerCase()}`));\n    const totalBase = "(" + bodies.map((b) => "(" + b.mass + ")").join("+") + ")";\n    const properties = [If("v.material_revision!=v.ragdoll_revision||v.material_variant!=v.variant", [\n      A("v.material_revision", "v.ragdoll_revision"),\n      A("v.material_variant", "v.variant"),\n      bodies.map((body, i) => PROPERTY_FIELDS.map((key) => A(materialName(i, key), body[key]))),\n      ...[false, true].map((targeted) => [A("t.property_index", 0), Loop("v.ragdoll_property_count", [\n        A("t.property_target", property("part")),\n        PROPERTY_FIELDS.map((key) => A("t.property_" + key.toLowerCase(), property(key))),\n        bodies.map((body, i) => If(targeted ? `t.property_target==${ids[i]}` : "t.property_target==0", PROPERTY_FIELDS.map((key) => [\n          A("t.property_value", "t.property_" + key.toLowerCase()),\n          If("t.property_value>=0", A(materialName(i, key), key === "mass" && !targeted ? `t.property_value*(${body.mass})/${totalBase}` : "t.property_value"))\n        ]))),\n        A("t.property_index", "t.property_index+1")\n      ])]),\n      rig.joints.map((_, i) => A(`v.joint_enabled_${i}`, "v.simulation_joints")),\n      ...rig.joints.length ? [A("t.joint_input_index", 0), Loop("v.ragdoll_joint_count", [\n        A("t.joint_input_id", choose("t.joint_input_index", slots(MAX_JOINTS).map((i) => `v.ragdoll_joint_${i}_id`))),\n        A("t.joint_input_enabled", choose("t.joint_input_index", slots(MAX_JOINTS).map((i) => `v.ragdoll_joint_${i}_enabled`))),\n        rig.joints.map((_, i) => If(`t.joint_input_id==${jointIds[i]}`, A(`v.joint_enabled_${i}`, "t.joint_input_enabled"))),\n        A("t.joint_input_index", "t.joint_input_index+1")\n      ])] : []\n    ])];\n    const motion = [If("v.active&&v.ragdoll_motion_ack<v.ragdoll_motion_last", [\n      Loop(MAX_MOTIONS, [If("v.ragdoll_motion_ack<v.ragdoll_motion_last", [\n        A("t.input_slot", `math.mod(v.ragdoll_motion_ack,${MAX_MOTIONS})`),\n        MOTION_FIELDS.map((key) => A("t.input_" + key, choose("t.input_slot", slots(MAX_MOTIONS).map((i) => `v.ragdoll_motion_${i}_${key}`)))),\n        If("t.input_seq==v.ragdoll_motion_ack+1", [control.apply("motion"), A("v.ragdoll_motion_ack", "t.input_seq"), A("v.sleep", 0)])\n      ])])\n    ])];\n    const forces = [If("v.ragdoll_force_count>0", [\n      A("v.sleep", 0),\n      A("t.input_force_index", 0),\n      Loop(`math.clamp(v.ragdoll_force_count,0,${MAX_FORCES})`, [\n        FORCE_FIELDS.map((key) => A("t.input_" + key, choose("t.input_force_index", slots(MAX_FORCES).map((i) => `v.ragdoll_force_${i}_${key}`)))),\n        control.apply("force", 1 / rig.simulation.frequency),\n        A("t.input_force_index", "t.input_force_index+1")\n      ])\n    ])];\n    return { initialize, frame, properties, motion, forces };\n  }\n\n  // src/core/dynamics.mjs\n  function createDynamics(rig, settings2) {\n    const { bodies: BODIES, joints: JOINTS, shapes: SHAPES, shapePairs: SHAPE_PAIRS } = rig;\n    const CONTACT_LIMIT = settings2.contactLimit;\n    const GROUND = BODIES.length;\n    const dt = 1 / settings2.frequency;\n    const gravityValue = (factor = 1) => factor === 1 ? "v.gravity_pixels" : "v.gravity_step";\n    const ITERATIONS = settings2.iterations;\n    const slots2 = Array.from({ length: CONTACT_LIMIT }, (_, i) => i);\n    const parts = [...BODIES, null];\n    const contactKeys = ["g", "lo", "hi", ...["n", "ra", "rb"].flatMap((p) => axes.map((k) => p + k))];\n    const pagedContacts = CONTACT_LIMIT > 128;\n    const solvedContact = (i, k) => pagedContacts ? `v.contact_sorted_${i}_${k}` : `v.c${i}.${k}`;\n    const bodyKeys = ["im", ...["v", "w", "dv", "dw"].flatMap((p) => axes.map((k) => p + k)), ...axes.flatMap((k) => axes.map((l) => "i" + k + l))];\n    const loadBody = (out, index) => dispatch(index, parts, (_, i) => bodyKeys.filter((k) => !["iyx", "izx", "izy"].includes(k)).map((k) => A(out + k, "v.d" + i + "." + k)));\n    const saveDelta = (out, index) => dispatch(index, parts, (_, i) => ["dv", "dw"].flatMap((p) => axes.map((k) => A("v.d" + i + "." + p + k, out + p + k))));\n    const matrix = (out, body, p) => axes.map((k) => A(out + k, axes.map((l) => `${body}i${[k, l].sort().join("")}*${p}${l}`).join("+")));\n    const basis = (out, q) => axes.map((_, i) => [vector("t.unit", axes.map((_2, j) => Number(i === j))), rotate(out + i, q, "t.unit")]);\n    const shapeKeys = [...axes, ...quat.map((k) => "q" + k), ...axes.map((k) => "h" + k), "body"];\n    const shapeIndices = SHAPES.map((_, i) => i);\n    const loadShape = (out, index, indices = shapeIndices) => [\n      ...axes.map((k, j) => A(out + "h" + k, choose(index, indices.map((i) => SHAPES[i].half[j])))),\n      dispatch(index, indices, (i) => shapeKeys.filter((k) => k[0] !== "h").map((k) => A(out + k, k === "body" ? SHAPES[i].body : "v.s" + i + "." + k)))\n    ];\n    const swapShapes = () => [shapeKeys.map((k) => A("t.swap" + k, "t.a" + k)), shapeKeys.map((k) => A("t.a" + k, "t.b" + k)), shapeKeys.map((k) => A("t.b" + k, "t.swap" + k))];\n    function initializeDynamics() {\n      return [\n        A("v.contact_count", 0),\n        A("v.contact_overflow", 0),\n        vector(`v.d${GROUND}.`, [0, 0, 0]),\n        parts.flatMap((_, i) => bodyKeys.map((k) => A(`v.d${i}.${k}`, 0))),\n        [...contactKeys, "l0", "l1", "l2"].map((k) => A("v.scratch_zero." + k, 0)),\n        slots2.map((i) => A("v.c" + i, "v.scratch_zero")),\n        pagedContacts ? slots2.map((i) => [...contactKeys, "l0", "l1", "l2"].map((k) => A(solvedContact(i, k), 0))) : [],\n        JOINTS.flatMap((_, i) => Array.from({ length: 5 }, (_2, k) => A(`v.j${i}l${k}`, 0)))\n      ];\n    }\n    function prepareBodies() {\n      const sel = (values) => choose("t.body_index", values);\n      const b = "v.scratch_b.", d = "v.scratch_d.", s = "v.scratch_s.";\n      return [\n        A("v.contact_count", 0),\n        A("v.contact_overflow", 0),\n        A("v.support", 0),\n        A("t.body_index", 0),\n        Loop(BODIES.length, [\n          A("v.scratch_b", sel(BODIES.map((_, i) => "v.b" + i))),\n          A("v.scratch_d", sel(BODIES.map((_, i) => "v.d" + i))),\n          scale(d, b, 16),\n          scale(d + "v", b + "v", 16),\n          copy(d + "w", b + "w"),\n          vector(d + "dv", [0, 0, 0]),\n          vector(d + "dw", [0, 0, 0]),\n          A(d + "im", sel(BODIES.map((_, i) => inverseMass(rig, i)))),\n          basis("t.u", b + "q"),\n          ...[0, 1, 2].map((j) => A("t.inverse_inertia" + j, sel(BODIES.map((_, i) => inverseInertia(rig, i, j))))),\n          axes.flatMap((k) => axes.map((l) => A(d + "i" + k + l, axes.map((_, j) => "t.u" + j + k + "*t.u" + j + l + "*t.inverse_inertia" + j).join("+")))),\n          dispatch("t.body_index", BODIES, (_, i) => A("v.d" + i, "v.scratch_d")),\n          A("t.body_index", "t.body_index+1")\n        ]),\n        A("t.shape_index", 0),\n        Loop(SHAPES.length, [\n          A("v.scratch_s", 0),\n          ...axes.map((k, j) => A("t.local" + k, choose("t.shape_index", SHAPES.map((shape) => shape.center[j])))),\n          A("t.shape_body", choose("t.shape_index", SHAPES.map((shape) => shape.body))),\n          A("v.scratch_b", choose("t.shape_body", BODIES.map((_, i) => "v.b" + i))),\n          A("v.scratch_d", choose("t.shape_body", BODIES.map((_, i) => "v.d" + i))),\n          rotate("t.offset", b + "q", "t.local"),\n          add(s, "v.scratch_d.", "t.offset"),\n          ...quat.map((k, j) => A("t.localq" + k, choose("t.shape_index", SHAPES.map((shape) => shape.quaternion[j])))),\n          multiply(s + "q", b + "q", "t.localq"),\n          ...axes.map((k, j) => A(s + "h" + k, choose("t.shape_index", SHAPES.map((shape) => shape.half[j])))),\n          A(s + "body", "t.shape_body"),\n          dispatch("t.shape_index", SHAPES, (_, i) => A("v.s" + i, "v.scratch_s")),\n          A("t.shape_index", "t.shape_index+1")\n        ]),\n        A("t.shape_index", 0),\n        Loop(SHAPES.length, [\n          A("v.scratch_s", choose("t.shape_index", SHAPES.map((_, i) => "v.s" + i))),\n          basis("t.u", s + "q"),\n          axes.map((k) => A(s + "e" + k, axes.map((l, j) => "math.abs(t.u" + j + k + ")*" + s + "h" + l).join("+"))),\n          dispatch("t.shape_index", SHAPES, (_, i) => A("v.s" + i, "v.scratch_s")),\n          A("t.shape_index", "t.shape_index+1")\n        ]),\n        BODIES.map((_, i) => A("v.d" + i + ".minx", SHAPES.flatMap((s2, j) => s2.body === i ? ["(v.s" + j + ".x-v.s" + j + ".ex)"] : []).reduce((a, b2) => "math.min(" + a + "," + b2 + ")"))),\n        JOINTS.flatMap((_, i) => Array.from({ length: 5 }, (_2, k) => A("v.j" + i + "l" + k, 0)))\n      ];\n    }\n    function appendContact() {\n      return [A("t.clo", "t.sort_lo"), A("t.chi", "t.sort_hi"), If(`v.contact_count<${CONTACT_LIMIT}`, [\n        dispatch("v.contact_count", slots2, (i) => [...contactKeys.map((k) => A("v.c" + i + "." + k, "t.c" + k)), ...pagedContacts ? [] : [0, 1, 2].map((k) => A("v.c" + i + ".l" + k, 0))]),\n        A("v.contact_count", "v.contact_count+1"),\n        If(`t.cia==${GROUND} || t.cib==${GROUND}`, A("v.support", 1))\n      ], A("v.contact_overflow", 1))];\n    }\n    const vertices = [[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]];\n    const faces = [[3, 2, 1, 0], [4, 5, 6, 7], [5, 4, 0, 1], [2, 3, 7, 6], [0, 4, 7, 3], [1, 2, 6, 5]];\n    const faceAxis = [2, 2, 1, 1, 0, 0], faceSign = [-1, 1, -1, 1, -1, 1];\n    const polygon = Array.from({ length: 8 }, (_, i) => i);\n    function appendVertex() {\n      return [dispatch("t.out_count", polygon, (i) => copy("t.out" + i, "t.vertex")), A("t.out_count", "t.out_count+1")];\n    }\n    function collide() {\n      const extent = (side) => axes.map((k, i) => `t.${side}h${k}*math.abs(${dot(`t.${side}u${i}`, "t.axis")})`).join("+");\n      const faceNormal = (side) => [axes.map((k) => A("t.fn" + k, `(${choose(`t.${side}face`, faceAxis.map((i) => `t.${side}u${i}${k}`))})*(${choose(`t.${side}face`, faceSign)})`))];\n      return [\n        basis("t.au", "t.aq"),\n        basis("t.bu", "t.bq"),\n        sub("t.delta", "t.b", "t.a"),\n        A("t.depth", 1e6),\n        A("t.axis_id", 0),\n        Loop(15, [If("t.depth>=0", [\n          If("t.axis_id<6", axes.map((k) => A("t.axis" + k, choose("t.axis_id", [0, 1, 2].map((i) => `t.au${i}${k}`).concat([0, 1, 2].map((i) => `t.bu${i}${k}`))))), [\n            axes.map((k) => A("t.u" + k, choose("math.floor((t.axis_id-6)/3)", [0, 1, 2].map((i) => `t.au${i}${k}`)))),\n            axes.map((k) => A("t.w" + k, choose("math.mod(t.axis_id,3)", [0, 1, 2].map((i) => `t.bu${i}${k}`)))),\n            cross("t.axis", "t.u", "t.w")\n          ]),\n          A("t.norm_axis", `math.sqrt(${dot("t.axis", "t.axis")})`),\n          If("t.norm_axis>0.000001", [\n            scale("t.axis", "t.axis", "1/t.norm_axis"),\n            A("t.projection", dot("t.delta", "t.axis")),\n            A("t.overlap", `${extent("a")}+${extent("b")}-math.abs(t.projection)`),\n            If("t.overlap<t.depth", [A("t.depth", "t.overlap"), scale("t.normal", "t.axis", "t.projection<0?-1:1")])\n          ])\n        ]), A("t.axis_id", "t.axis_id+1")]),\n        If("t.depth>=0", [\n          ...["a", "b"].map((side) => [\n            A(`t.${side}face`, 0),\n            A("t.best", -1e6),\n            faces.map((_, i) => [\n              A("t.projection", `(${dot(`t.${side}u${faceAxis[i]}`, "t.normal")})*${faceSign[i] * (side === "a" ? 1 : -1)}`),\n              If("t.projection>t.best", [A("t.best", "t.projection"), A(`t.${side}face`, i)])\n            ])\n          ]),\n          faceNormal("a"),\n          copy("t.reference", "t.fn"),\n          A("t.reference_half", choose("t.aface", faceAxis.map((i) => "t.ah" + axes[i]))),\n          A("t.count", 4),\n          [0, 1, 2, 3].map((j) => [\n            vector("t.local", axes.map((k, i) => `t.bh${k}*(${choose("t.bface", faces.map((f) => vertices[f[j]][i]))})`)),\n            rotate("t.vertex", "t.bq", "t.local"),\n            add("t.vertex", "t.vertex", "t.b"),\n            copy("t.poly" + j, "t.vertex")\n          ]),\n          [A("t.clip_face", 0), Loop(6, [If(choose("t.aface", faceAxis) + "!=" + choose("t.clip_face", faceAxis) + "&&t.count>0", [\n            vector("t.plane", axes.map((k) => "(" + choose("t.clip_face", faceAxis.map((i) => "t.au" + i + k)) + ")*(" + choose("t.clip_face", faceSign) + ")")),\n            A("t.plane_half", choose("t.clip_face", faceAxis.map((i) => "t.ah" + axes[i]))),\n            A("t.out_count", 0),\n            axes.map((k) => A("t.start" + k, choose("t.count-1", polygon.map((i) => `t.poly${i}${k}`)))),\n            sub("t.rel", "t.start", "t.a"),\n            A("t.distance_start", `(${dot("t.plane", "t.rel")})-t.plane_half`),\n            A("t.vertex_id", 0),\n            Loop("t.count", [\n              axes.map((k) => A("t.end" + k, choose("t.vertex_id", polygon.map((i) => `t.poly${i}${k}`)))),\n              sub("t.rel", "t.end", "t.a"),\n              A("t.distance_end", `(${dot("t.plane", "t.rel")})-t.plane_half`),\n              If("(t.distance_start<0)!=(t.distance_end<0)", [\n                A("t.fraction", "t.distance_start/(t.distance_start-t.distance_end)"),\n                axes.map((k) => A("t.vertex" + k, `t.start${k}+(t.end${k}-t.start${k})*t.fraction`)),\n                appendVertex()\n              ]),\n              If("t.distance_end<0", [copy("t.vertex", "t.end"), appendVertex()]),\n              copy("t.start", "t.end"),\n              A("t.distance_start", "t.distance_end"),\n              A("t.vertex_id", "t.vertex_id+1")\n            ]),\n            A("t.count", "t.out_count"),\n            polygon.map((i) => If(`t.count>${i}`, copy("t.poly" + i, "t.out" + i)))\n          ]), A("t.clip_face", "t.clip_face+1")])],\n          A("t.vertex_id", 0),\n          Loop("t.count", [\n            axes.map((k) => A("t.point" + k, choose("t.vertex_id", polygon.map((i) => `t.poly${i}${k}`)))),\n            sub("t.rel", "t.point", "t.a"),\n            A("t.distance", `(${dot("t.reference", "t.rel")})-t.reference_half`),\n            If("t.distance<=0.000001", [\n              A("t.cia", "t.abody"),\n              A("t.cib", "t.bbody"),\n              copy("t.cn", "t.normal"),\n              A("t.cg", `t.distance*(${dot("t.normal", "t.reference")})`),\n              axes.map((k) => A("t.cra" + k, `t.point${k}-t.reference${k}*t.distance-(${choose("t.abody", parts.map((_, i) => `v.d${i}.${k}`))})`)),\n              axes.map((k) => A("t.crb" + k, `t.point${k}-(${choose("t.bbody", parts.map((_, i) => `v.d${i}.${k}`))})`)),\n              appendContact()\n            ]),\n            A("t.vertex_id", "t.vertex_id+1")\n          ])\n        ])\n      ];\n    }\n    function terrainShape() {\n      return [If("v.ragdoll_terrain_mode", [\n        A("t.box_index", `t.cell_id-${GROUND}`),\n        dispatch("t.box_index", Array.from({ length: MAX_TERRAIN_BOXES }, (_, i) => i), (i) => axes.flatMap((k) => [A("t.box_min" + k, `v.external_terrain_${i}_min${k}`), A("t.box_max" + k, `v.external_terrain_${i}_max${k}`)])),\n        ...axes.flatMap((k) => [\n          A("t.b" + k, `(t.box_min${k}+(t.box_max${k}-t.box_min${k})*0.5-v.o${k})*16`),\n          A("t.bh" + k, `(t.box_max${k}-t.box_min${k})*8`)\n        ])\n      ], [axes.map((k) => A("t.b" + k, `(t.cell${k}+0.5-v.o${k})*16`)), vector("t.bh", [8, 8, 8])])];\n    }\n    function contacts() {\n      const at = "t.cellx-math.floor(v.ex),t.celly-math.floor(v.ey),t.cellz-math.floor(v.ez)";\n      const tags = (values) => values.map((value) => "\'" + value + "\'").join(",");\n      const solid = "q.relative_block_has_any_tag(" + at + "," + tags(settings2.terrain.includeTags) + ")" + (settings2.terrain.excludeTags.length ? "&&!q.relative_block_has_any_tag(" + at + "," + tags(settings2.terrain.excludeTags) + ")" : "");\n      return [\n        vector("t.min", [1e6, 1e6, 1e6]),\n        vector("t.max", [-1e6, -1e6, -1e6]),\n        SHAPES.map((_, i) => axes.flatMap((k) => [A("t.min" + k, "math.min(t.min" + k + ",v.s" + i + k + "-v.s" + i + "e" + k + ")"), A("t.max" + k, "math.max(t.max" + k + ",v.s" + i + k + "+v.s" + i + "e" + k + ")")])),\n        axes.flatMap((k) => [A("t.min" + k, "math.floor(v.o" + k + "+t.min" + k + "/16)"), A("t.max" + k, "math.floor(v.o" + k + "+t.max" + k + "/16)")]),\n        A("v.terrain_minx", "t.minx"),\n        A("v.terrain_yz", "(t.maxy-t.miny+1)*(t.maxz-t.minz+1)"),\n        A("t.contact_mode", SHAPE_PAIRS.length ? 0 : 1),\n        Loop(SHAPE_PAIRS.length ? 2 : 1, [\n          A("t.pair", 0),\n          A("t.cell_id", GROUND),\n          A("t.cellx", "t.minx"),\n          Loop(`t.contact_mode?(v.ragdoll_terrain_mode?math.clamp(v.ragdoll_terrain_count,0,${MAX_TERRAIN_BOXES}):t.maxx-t.minx+1):1`, [\n            A("t.celly", "t.miny"),\n            Loop("t.contact_mode&&!v.ragdoll_terrain_mode?t.maxy-t.miny+1:1", [\n              A("t.cellz", "t.minz"),\n              Loop("t.contact_mode?(v.ragdoll_terrain_mode?1:t.maxz-t.minz+1):" + SHAPE_PAIRS.length, [\n                If("!t.contact_mode?v.simulation_collisions:(v.ragdoll_terrain_mode?1:(" + solid + "))", [\n                  A("t.shape", 0),\n                  Loop("t.contact_mode?" + SHAPES.length + ":1", [\n                    A("t.do_contact", 1),\n                    If("!t.contact_mode", SHAPE_PAIRS.length ? [\n                      A("t.shape_a", choose("t.pair", SHAPE_PAIRS.map((p) => p[0]))),\n                      A("t.shape_b", choose("t.pair", SHAPE_PAIRS.map((p) => p[1]))),\n                      loadShape("t.a", "t.shape_a"),\n                      loadShape("t.b", "t.shape_b"),\n                      A("t.bound_a", choose("t.abody", BODIES.map((_, i) => "v.d" + i + ".minx"))),\n                      A("t.bound_b", choose("t.bbody", BODIES.map((_, i) => "v.d" + i + ".minx"))),\n                      If("t.bound_a<t.bound_b||(t.bound_a==t.bound_b&&t.abody<t.bbody)", [\n                        A("t.sort_lox", "t.bound_a"),\n                        A("t.sort_lo", "t.abody"),\n                        A("t.sort_hix", "t.bound_b"),\n                        A("t.sort_hi", "t.bbody"),\n                        swapShapes()\n                      ], [A("t.sort_lox", "t.bound_b"), A("t.sort_lo", "t.bbody"), A("t.sort_hix", "t.bound_a"), A("t.sort_hi", "t.abody")])\n                    ] : [], [\n                      loadShape("t.a", "t.shape"),\n                      terrainShape(),\n                      basis("t.au", "t.aq"),\n                      A("t.do_contact", axes.map((k) => "math.abs(t.a" + k + "-t.b" + k + ")<=t.bh" + k + "+(" + axes.map((l, j) => "math.abs(t.au" + j + k + ")*t.ah" + l).join("+") + ")").join("&&")),\n                      If("t.do_contact", [\n                        vector("t.bq", [0, 0, 0]),\n                        A("t.bqw", 1),\n                        A("t.bbody", GROUND),\n                        A("t.body_minx", choose("t.abody", BODIES.map((_, i) => "v.d" + i + ".minx"))),\n                        A("t.cell_minx", "t.bx-t.bhx"),\n                        If("t.cell_minx<t.body_minx", [A("t.sort_lox", "t.cell_minx"), A("t.sort_lo", "t.cell_id"), A("t.sort_hix", "t.body_minx"), A("t.sort_hi", "t.abody")], [\n                          A("t.sort_lox", "t.body_minx"),\n                          A("t.sort_lo", "t.abody"),\n                          A("t.sort_hix", "t.cell_minx"),\n                          A("t.sort_hi", "t.cell_id"),\n                          swapShapes()\n                        ])\n                      ])\n                    ]),\n                    If("t.do_contact", collide()),\n                    A("t.shape", "t.shape+1")\n                  ])\n                ]),\n                A("t.pair", "t.pair+1"),\n                A("t.cell_id", "t.cell_id+1"),\n                A("t.cellz", "t.cellz+1")\n              ]),\n              A("t.celly", "t.celly+1")\n            ]),\n            A("t.cellx", "t.cellx+1")\n          ]),\n          A("t.contact_mode", "t.contact_mode+1")\n        ])\n      ];\n    }\n    function separateBodyContacts() {\n      if (!SHAPE_PAIRS.length) return [];\n      const batches = [];\n      for (const pair of SHAPE_PAIRS) {\n        let batch = batches.at(-1);\n        if (!batch || batch.pairs.length >= 128 || (/* @__PURE__ */ new Set([...batch.indices, ...pair])).size > 24) {\n          batch = { pairs: [], indices: [] };\n          batches.push(batch);\n        }\n        batch.pairs.push(pair);\n        for (const i of pair) if (!batch.indices.includes(i)) batch.indices.push(i);\n      }\n      return batches.map(({ pairs, indices }) => [If("v.simulation_collisions", [A("t.pair", 0), Loop(pairs.length, [\n        A("t.shape_a", choose("t.pair", pairs.map((p) => indices.indexOf(p[0])))),\n        A("t.shape_b", choose("t.pair", pairs.map((p) => indices.indexOf(p[1])))),\n        loadShape("t.a", "t.shape_a", indices),\n        loadShape("t.b", "t.shape_b", indices),\n        A("t.bound_a", choose("t.abody", BODIES.map((_, i) => `v.d${i}minx`))),\n        A("t.bound_b", choose("t.bbody", BODIES.map((_, i) => `v.d${i}minx`))),\n        If("t.bound_a<t.bound_b || (t.bound_a==t.bound_b && t.abody<t.bbody)", [\n          A("t.sort_lox", "t.bound_a"),\n          A("t.sort_lo", "t.abody"),\n          A("t.sort_hix", "t.bound_b"),\n          A("t.sort_hi", "t.bbody"),\n          swapShapes()\n        ], [A("t.sort_lox", "t.bound_b"), A("t.sort_lo", "t.bbody"), A("t.sort_hix", "t.bound_a"), A("t.sort_hi", "t.abody")]),\n        collide(),\n        A("t.pair", "t.pair+1")\n      ])])]);\n    }\n    function separateTerrainContacts() {\n      const at = "t.cellx-math.floor(v.ex),t.celly-math.floor(v.ey),t.cellz-math.floor(v.ez)";\n      const tags = (values) => values.map((value) => `\'${value}\'`).join(",");\n      const solid = `q.relative_block_has_any_tag(${at},${tags(settings2.terrain.includeTags)})${settings2.terrain.excludeTags.length ? `&&!q.relative_block_has_any_tag(${at},${tags(settings2.terrain.excludeTags)})` : ""}`;\n      return [\n        vector("t.min", [1e6, 1e6, 1e6]),\n        vector("t.max", [-1e6, -1e6, -1e6]),\n        SHAPES.map((_, i) => [axes.flatMap((k) => [A("t.min" + k, `math.min(t.min${k},v.s${i}${k}-v.s${i}e${k})`), A("t.max" + k, `math.max(t.max${k},v.s${i}${k}+v.s${i}e${k})`)])]),\n        axes.flatMap((k) => [A("t.min" + k, `math.floor(v.o${k}+t.min${k}/16)`), A("t.max" + k, `math.floor(v.o${k}+t.max${k}/16)`)]),\n        A("v.terrain_minx", "t.minx"),\n        A("v.terrain_yz", "(t.maxy-t.miny+1)*(t.maxz-t.minz+1)"),\n        A("t.cell_id", GROUND),\n        A("t.cellx", "t.minx"),\n        Loop(`v.ragdoll_terrain_mode?math.clamp(v.ragdoll_terrain_count,0,${MAX_TERRAIN_BOXES}):t.maxx-t.minx+1`, [A("t.celly", "t.miny"), Loop("v.ragdoll_terrain_mode?1:t.maxy-t.miny+1", [A("t.cellz", "t.minz"), Loop("v.ragdoll_terrain_mode?1:t.maxz-t.minz+1", [\n          If("v.ragdoll_terrain_mode?1:(" + solid + ")", [A("t.shape", 0), Loop(SHAPES.length, [\n            loadShape("t.a", "t.shape"),\n            terrainShape(),\n            basis("t.au", "t.aq"),\n            If(axes.map((k) => `math.abs(t.a${k}-t.b${k})<=t.bh${k}+(${axes.map((l, j) => `math.abs(t.au${j}${k})*t.ah${l}`).join("+")})`).join("&&"), [\n              vector("t.bq", [0, 0, 0]),\n              A("t.bqw", 1),\n              A("t.bbody", GROUND),\n              A("t.body_minx", choose("t.abody", BODIES.map((_, i) => `v.d${i}minx`))),\n              A("t.cell_minx", "t.bx-t.bhx"),\n              If("t.cell_minx<t.body_minx", [A("t.sort_lox", "t.cell_minx"), A("t.sort_lo", "t.cell_id"), A("t.sort_hix", "t.body_minx"), A("t.sort_hi", "t.abody")], [\n                A("t.sort_lox", "t.body_minx"),\n                A("t.sort_lo", "t.abody"),\n                A("t.sort_hix", "t.cell_minx"),\n                A("t.sort_hi", "t.cell_id"),\n                swapShapes()\n              ]),\n              collide()\n            ]),\n            A("t.shape", "t.shape+1")\n          ])]),\n          A("t.cell_id", "t.cell_id+1"),\n          A("t.cellz", "t.cellz+1")\n        ]), A("t.celly", "t.celly+1")]), A("t.cellx", "t.cellx+1")])\n      ];\n    }\n    const separateContacts = SHAPES.length > 24 || CONTACT_LIMIT > 128;\n    function bodyContacts() {\n      return separateContacts ? separateBodyContacts() : contacts();\n    }\n    function terrainContacts() {\n      return separateContacts ? separateTerrainContacts() : [];\n    }\n    function sortContacts() {\n      const keys2 = ["lox", "lo", "hix", "hi"];\n      const loadKey = (out, index) => [\n        ...["lo", "hi"].map((k) => A(out + k, choose(index, slots2.map((i) => `v.c${i}${k}`)))),\n        ...["lo", "hi"].map((k) => A(out + k + "x", `${out + k}<${GROUND}?(${choose(out + k, BODIES.map((_, i) => `v.d${i}minx`))}):(v.ragdoll_terrain_mode?((${terrainValue(`${out + k}-${GROUND}`, "minx")})-v.ox)*16:((v.terrain_minx+math.floor((${out + k}-${GROUND})/v.terrain_yz)+0.5-v.ox)*16-8))`))\n      ];\n      const less = keys2.reduceRight((rest, k) => `(t.key_${k}<t.other_${k}||(t.key_${k}==t.other_${k}&&${rest}))`, "0");\n      return [A("t.i", 0), Loop("v.contact_count", [\n        loadKey("t.key_", "t.i"),\n        A("t.insert", "t.i"),\n        A("t.moving", 1),\n        Loop("t.i", [If("t.moving&&t.insert>0", [\n          A("t.previous", choose("t.insert-1", slots2.map((i) => `v.order${i}`))),\n          loadKey("t.other_", "t.previous"),\n          If(less, [dispatch("t.insert", slots2, (i) => A(`v.order${i}`, "t.previous")), A("t.insert", "t.insert-1")], A("t.moving", 0))\n        ])]),\n        dispatch("t.insert", slots2, (i) => A(`v.order${i}`, "t.i")),\n        A("t.i", "t.i+1")\n      ]), pagedContacts ? Array.from({ length: 3 }, (_, group) => {\n        const fields = [...contactKeys, "l0", "l1", "l2"].slice(group * 5, group * 5 + 5);\n        return [A("t.copy_contact", 0), Loop("v.contact_count", [\n          A("t.copy_slot", choose("t.copy_contact", slots2.map((i) => `v.order${i}`))),\n          dispatch("t.copy_slot", slots2, (i) => fields.filter((k) => !/^l[012]$/.test(k)).map((k) => A("t.copy_" + k, `v.c${i}.${k}`))),\n          dispatch("t.copy_contact", slots2, (i) => fields.map((k) => A(solvedContact(i, k), /^l[012]$/.test(k) ? 0 : "t.copy_" + k))),\n          A("t.copy_contact", "t.copy_contact+1")\n        ])];\n      }) : []];\n    }\n    function equation(lambda, angular = false) {\n      return [\n        matrix("t.response_a", "t.da", "t.ga"),\n        matrix("t.response_b", "t.db", "t.gb"),\n        A("t.denominator", `t.daim+t.dbim+(${dot("t.ga", "t.response_a")})+(${dot("t.gb", "t.response_b")})+t.eps`),\n        A("t.gw", `${angular ? "0" : `(${dot("t.n", "t.dbv")})-(${dot("t.n", "t.dav")})`}+(${dot("t.ga", "t.daw")})+(${dot("t.gb", "t.dbw")})`),\n        A("t.gdelta", `${angular ? "0" : `(${dot("t.n", "t.dbdv")})-(${dot("t.n", "t.dadv")})`}+(${dot("t.ga", "t.dadw")})+(${dot("t.gb", "t.dbdw")})`),\n        A("t.rhs", `-t.g*t.stiff-t.gw*t.relax${angular ? "" : "+t.bounce*math.max(0,-t.gw)"}${angular ? "" : `+(v.ragdoll_simulation_gravity_vector?-(${dot("v.gravity_step_", "t.n")}):${gravityValue(dt)}*t.ny)*((t.dbim>0)-(t.daim>0))`}`),\n        A("t.next", `math.clamp(${lambda}+(t.rhs-t.gdelta-t.eps*${lambda})/t.denominator,t.lower,t.upper)`),\n        A("t.impulse", `t.next-${lambda}`),\n        A(lambda, "t.next"),\n        ...!angular ? axes.flatMap((k) => [A("t.dadv" + k, `t.dadv${k}-t.n${k}*t.daim*t.impulse`), A("t.dbdv" + k, `t.dbdv${k}+t.n${k}*t.dbim*t.impulse`)]) : [],\n        axes.flatMap((k) => [A("t.dadw" + k, `t.dadw${k}+t.response_a${k}*t.impulse`), A("t.dbdw" + k, `t.dbdw${k}+t.response_b${k}*t.impulse`)])\n      ];\n    }\n    const material = (key) => {\n      const ground = `t.ground_${key}`;\n      const a = choose("t.cia", [...BODIES.map((_, i) => materialValue(rig, i, key)), ground]), b = choose("t.cib", [...BODIES.map((_, i) => materialValue(rig, i, key)), ground]);\n      return key === "restitution" ? `math.max(${a},${b})` : `math.sqrt((${a})*(${b}))`;\n    };\n    function contactSolve() {\n      const prefix = "t.c", friction = "t.phase==0";\n      const pages = pagedContacts ? Array.from({ length: Math.ceil(slots2.length / 64) }, (_, i) => slots2.slice(i * 64, i * 64 + 64)) : [slots2];\n      return [A("t.phase", rig.contactFriction === false ? 1 : 0), Loop(rig.contactFriction === false ? 1 : 2, [\n        If("t.phase==1||v.simulation_friction", pages.map((page) => [A("t.contact_id", page[0]), Loop(pagedContacts ? `math.clamp(v.contact_count-${page[0]},0,${page.length})` : "v.contact_count", [\n          A("t.slot", pagedContacts ? "t.contact_id" : choose("t.contact_id", slots2.map((i) => "v.order" + i))),\n          dispatch("t.slot", page, (i) => [...contactKeys, "l0", "l1", "l2"].map((k) => A((k === "g" || k.startsWith("ra") || k.startsWith("rb") ? "t." : prefix) + k, solvedContact(i, k))), page[0]),\n          A("t.cia", "math.min(t.chi," + GROUND + ")"),\n          A("t.cib", "math.min(t.clo," + GROUND + ")"),\n          A("t.ground_friction", settings2.terrain.friction),\n          A("t.ground_restitution", settings2.terrain.restitution),\n          If(`v.ragdoll_terrain_mode&&math.max(t.clo,t.chi)>=${GROUND}`, [\n            A("t.material_index", `math.max(t.clo,t.chi)-${GROUND}`),\n            ...["friction", "restitution"].map((key) => A("t.ground_" + key, terrainValue("t.material_index", key)))\n          ]),\n          loadBody("t.da", prefix + "ia"),\n          loadBody("t.db", prefix + "ib"),\n          A("t.relax", 12 / 13),\n          A("t.eps", 4 / (dt * dt * 1e7 * 13)),\n          A("t.stiff", friction + "?0:" + 4 / (dt * 13)),\n          If(friction, [\n            A("t.bounce", 0),\n            copy("t.normal", prefix + "n"),\n            vector("t.unit", ["math.abs(t.normalx)<0.9?1:0", "math.abs(t.normalx)<0.9?0:1", 0]),\n            cross("t.tangent0", "t.normal", "t.unit"),\n            cross("t.tangent1", "t.normal", "t.tangent0"),\n            A("t.upper", "(" + material("friction") + ")*" + gravityValue() + "/(t.daim+t.dbim)"),\n            A("t.lower", "-t.upper")\n          ], [A("t.lower", 0), A("t.upper", 1e6)]),\n          A("t.tangent_id", friction + "?0:2"),\n          Loop(friction + "?2:1", [\n            axes.map((k) => A("t.n" + k, choose("t.tangent_id", ["t.tangent0" + k, "t.tangent1" + k, prefix + "n" + k]))),\n            cross("t.ga", "t.ra", "t.n"),\n            scale("t.ga", "t.ga", -1),\n            cross("t.gb", "t.rb", "t.n"),\n            If("t.phase==1", A("t.bounce", material("restitution"))),\n            A("t.lambda", choose("t.tangent_id", [prefix + "l0", prefix + "l1", prefix + "l2"])),\n            equation("t.lambda"),\n            dispatch("t.tangent_id", [0, 1, 2], (i) => A(prefix + "l" + i, "t.lambda")),\n            A("t.tangent_id", "t.tangent_id+1")\n          ]),\n          saveDelta("t.da", prefix + "ia"),\n          saveDelta("t.db", prefix + "ib"),\n          dispatch("t.slot", page, (i) => [0, 1, 2].map((k) => A(solvedContact(i, "l" + k), prefix + "l" + k)), page[0]),\n          A("t.contact_id", "t.contact_id+1")\n        ])])),\n        A("t.phase", "t.phase+1")\n      ])];\n    }\n    function jointSolve() {\n      if (!JOINTS.length) return [];\n      const ids = rig.jointOrder;\n      const pick = (out, values) => A(out, choose("t.joint_id", values));\n      return [A("t.joint_id", 0), Loop(ids.length, [\n        If(choose("t.joint_id", ids.map((i) => `v.joint_enabled_${i}`)), [\n          pick("t.ja", ids.map((i) => JOINTS[i].a)),\n          pick("t.jb", ids.map((i) => JOINTS[i].b)),\n          A("v.scratch_joint", choose("t.joint_id", ids.map((i) => "v.j" + i))),\n          A("t.bounce", 0),\n          loadBody("t.da", "t.ja"),\n          loadBody("t.db", "t.jb"),\n          ...["a", "b"].flatMap((side) => [\n            ...axes.map((k) => A("t.local" + k, "v.scratch_joint." + side + k + "*16")),\n            ...quat.map((k) => A("t.jq" + k, choose("t.j" + side, BODIES.map((_, i) => "v.b" + i + "q" + k)))),\n            rotate("t.r" + side, "t.jq", "t.local")\n          ]),\n          A("t.relax", 16 / 17),\n          A("t.eps", 4 / (1 / 60 * 1 / 60 * 1e7 * 17)),\n          A("t.stiff", 240 / 17),\n          A("t.lower", -1e6),\n          A("t.upper", 1e6),\n          A("t.row", 0),\n          Loop(3, [\n            vector("t.n", axes.map((l, i) => "t.row==" + i)),\n            cross("t.ga", "t.ra", "t.n"),\n            scale("t.ga", "t.ga", -1),\n            cross("t.gb", "t.rb", "t.n"),\n            A("t.g", choose("t.row", axes.map((k) => choose("t.jb", BODIES.map((_, i) => "v.d" + i + "." + k)) + "+t.rb" + k + "-(" + choose("t.ja", BODIES.map((_, i) => "v.d" + i + "." + k)) + ")-t.ra" + k))),\n            A("t.lambda", choose("t.row", [0, 1, 2].map((i) => "v.scratch_joint.l" + i))),\n            equation("t.lambda"),\n            dispatch("t.row", [0, 1, 2], (i) => A("v.scratch_joint.l" + i, "t.lambda")),\n            A("t.row", "t.row+1")\n          ]),\n          A("t.upper", 0),\n          A("t.twist", 0),\n          Loop(2, [\n            ...["a", "b"].flatMap((side) => [\n              ...axes.map((k, n) => pick("t.local" + k, ids.map((i) => "t.twist?(" + JOINTS[i]["twistAxis" + side.toUpperCase()][n] + "):(" + JOINTS[i]["axis" + side.toUpperCase()][n] + ")"))),\n              ...quat.map((k) => A("t.jq" + k, choose("t.j" + side, BODIES.map((_, i) => "v.b" + i + "q" + k)))),\n              rotate("t.axis_" + side, "t.jq", "t.local")\n            ]),\n            cross("t.ga", "t.axis_b", "t.axis_a"),\n            cross("t.gb", "t.axis_a", "t.axis_b"),\n            pick("t.limit", ids.map((i) => "t.twist?(" + JOINTS[i].twist + "):(" + JOINTS[i].swing + ")")),\n            A("t.initial_limit", "t.twist?v.scratch_joint.twist:v.scratch_joint.swing"),\n            A("t.g", "math.cos(t.limit+math.max(0,t.initial_limit-t.limit)*math.max(0,1-v.age/" + settings2.poseTransition + "))-(" + dot("t.axis_a", "t.axis_b") + ")"),\n            A("t.lambda", "t.twist?v.scratch_joint.l4:v.scratch_joint.l3"),\n            equation("t.lambda", true),\n            If("t.twist", A("v.scratch_joint.l4", "t.lambda"), A("v.scratch_joint.l3", "t.lambda")),\n            A("t.twist", "t.twist+1")\n          ]),\n          saveDelta("t.da", "t.ja"),\n          saveDelta("t.db", "t.jb"),\n          dispatch("t.joint_id", ids, (i) => A("v.j" + i, "v.scratch_joint"))\n        ]),\n        A("t.joint_id", "t.joint_id+1")\n      ])];\n    }\n    function solverChunks() {\n      return [A("v.input_iteration", 0), Loop(ITERATIONS, [If(`v.simulation_iterations<=0||v.input_iteration<math.clamp(v.simulation_iterations,1,${ITERATIONS})`, [contactSolve(), JOINTS.length ? jointSolve() : []]), A("v.input_iteration", "v.input_iteration+1")])];\n    }\n    function integrateBodies() {\n      const b = "v.scratch_b.", d = "v.scratch_d.", decay = (value) => typeof value === "number" ? Math.pow(1 - value, dt) : "math.pow(1-(" + value + ")," + dt + ")";\n      return [A("t.body_index", 0), Loop(BODIES.length, [\n        A("v.scratch_b", choose("t.body_index", BODIES.map((_, i) => "v.b" + i))),\n        A("v.scratch_d", choose("t.body_index", BODIES.map((_, i) => "v.d" + i))),\n        A("t.linear_decay", choose("t.body_index", BODIES.map((body, i) => `v.ragdoll_property_count?${decay(materialValue(rig, i, "linearDamping"))}:${decay(body.linearDamping)}`))),\n        A("t.angular_decay", choose("t.body_index", BODIES.map((body, i) => `v.ragdoll_property_count?${decay(materialValue(rig, i, "angularDamping"))}:${decay(body.angularDamping)}`))),\n        axes.map((k) => A(b + "v" + k, "((" + d + "v" + k + "+" + d + "dv" + k + ")*t.linear_decay" + (k === "y" ? `+(v.ragdoll_simulation_gravity_vector?v.gravity_step_y:-${gravityValue(dt)})` : `+v.gravity_step_${k}`) + ")/16")),\n        axes.map((k) => A(b + "w" + k, "(" + d + "w" + k + "+" + d + "dw" + k + ")*t.angular_decay")),\n        axes.map((k) => A(b + k, b + k + "+" + b + "v" + k + "*" + dt)),\n        vector("t.angular", axes.map((k) => b + "w" + k)),\n        A("t.angularw", 0),\n        multiply("t.change", "t.angular", b + "q"),\n        quat.map((k) => A(b + "q" + k, b + "q" + k + "+t.change" + k + "*" + dt / 2)),\n        normalize(b + "q", quat),\n        dispatch("t.body_index", BODIES, (_, i) => A("v.b" + i, "v.scratch_b")),\n        A("t.body_index", "t.body_index+1")\n      ])];\n    }\n    return { initializeDynamics, prepareBodies, bodyContacts, terrainContacts, sortContacts, solverChunks, integrateBodies, jointSolve };\n  }\n\n  // src/core/liquids.mjs\n  function createLiquids(rig) {\n    const bodies = rig.bodies, shapes = rig.shapes, dt = 1 / rig.simulation.frequency;\n    const volume = (s) => `((${s.half[0]})*(${s.half[1]})*(${s.half[2]})/512)`;\n    const totalVolume = (i) => "(" + shapes.filter((s) => s.body === i).map(volume).join("+") + ")";\n    const initialize = bodies.map((_, i) => [A(`v.liquid_fraction_${i}`, 0), A(`v.liquid_region_${i}`, -1)]);\n    const step = [\n      bodies.map((_, i) => [\n        A(`v.liquid_fraction_${i}`, 0),\n        A(`v.liquid_region_${i}`, -1),\n        A(`v.liquid_mass_${i}`, 0),\n        A(`v.liquid_drag_${i}`, 0),\n        A(`v.liquid_angular_drag_${i}`, 0),\n        vector(`v.liquid_torque_${i}_`, [0, 0, 0])\n      ]),\n      If("v.ragdoll_liquid_count>0", [\n        A("t.fluid_shape", 0),\n        Loop(shapes.length, [\n          A("t.fluid_body", choose("t.fluid_shape", shapes.map((s) => s.body))),\n          axes.map((k) => A("t.fluid_b" + k, choose("t.fluid_body", bodies.map((_, i) => `v.b${i}${k}`)))),\n          [...axes, "w"].map((k) => A("t.fluid_bq" + k, choose("t.fluid_body", bodies.map((_, i) => `v.b${i}q${k}`)))),\n          A("t.fluid_volume", choose("t.fluid_shape", shapes.map((s) => `${volume(s)}/8`))),\n          A("t.fluid_body_volume", choose("t.fluid_body", bodies.map((_, i) => totalVolume(i)))),\n          A("t.fluid_sample", 0),\n          Loop(8, [\n            ...axes.map((k, j) => A("t.fluid_local" + k, choose("t.fluid_shape", shapes.map((s) => `(${s.half[j]})*(math.mod(math.floor(t.fluid_sample/${2 ** j}),2)-0.5)/16`)))),\n            ...[...axes, "w"].map((k, j) => A("t.fluid_sq" + k, choose("t.fluid_shape", shapes.map((s) => s.quaternion[j])))),\n            rotate("t.fluid_local", "t.fluid_sq", "t.fluid_local"),\n            ...axes.map((k, j) => A("t.fluid_local" + k, `t.fluid_local${k}+(${choose("t.fluid_shape", shapes.map((s) => s.center[j]))})/16`)),\n            rotate("t.fluid_offset", "t.fluid_bq", "t.fluid_local"),\n            ...axes.map((k) => A("t.fluid_point" + k, `v.o${k}+t.fluid_b${k}+t.fluid_offset${k}`)),\n            A("t.fluid_index", 0),\n            A("t.fluid_found", 0),\n            Loop(`math.clamp(v.ragdoll_liquid_count,0,${MAX_LIQUIDS})`, [\n              If("!t.fluid_found", [\n                dispatch("t.fluid_index", Array.from({ length: MAX_LIQUIDS }, (_, i) => i), (i) => liquidFields.map((k) => A("t.fluid_" + k, `v.ragdoll_liquid_${i}_${k}`))),\n                If(axes.map((k) => `t.fluid_point${k}>=t.fluid_min${k}&&t.fluid_point${k}<t.fluid_max${k}`).join("&&"), [\n                  A("t.fluid_found", 1),\n                  A("v.sleep", 0),\n                  axes.map((k) => A("t.fluid_force" + k, `-v.gravity_${k}*t.fluid_density*t.fluid_volume`)),\n                  cross("t.fluid_torque", "t.fluid_offset", "t.fluid_force"),\n                  dispatch("t.fluid_body", bodies, (_, i) => [\n                    A(`v.liquid_fraction_${i}`, `v.liquid_fraction_${i}+t.fluid_volume/t.fluid_body_volume`),\n                    A(`v.liquid_region_${i}`, "t.fluid_index"),\n                    A(`v.liquid_mass_${i}`, `v.liquid_mass_${i}+t.fluid_density*t.fluid_volume`),\n                    A(`v.liquid_drag_${i}`, `v.liquid_drag_${i}+t.fluid_drag*t.fluid_volume/t.fluid_body_volume`),\n                    A(`v.liquid_angular_drag_${i}`, `v.liquid_angular_drag_${i}+t.fluid_angulardrag*t.fluid_volume/t.fluid_body_volume`),\n                    axes.map((k) => A(`v.liquid_torque_${i}_${k}`, `v.liquid_torque_${i}_${k}+t.fluid_torque${k}`))\n                  ])\n                ])\n              ]),\n              A("t.fluid_index", "t.fluid_index+1")\n            ]),\n            A("t.fluid_sample", "t.fluid_sample+1")\n          ]),\n          A("t.fluid_shape", "t.fluid_shape+1")\n        ]),\n        bodies.map((_, i) => If(`v.liquid_fraction_${i}>0`, [\n          ...axes.map((k) => A(`v.b${i}v${k}`, `v.b${i}v${k}*math.pow(2.718281828459045,-v.liquid_drag_${i}*${dt})-v.gravity_${k}*v.liquid_mass_${i}/${materialValue(rig, i, "mass")}*${dt}`)),\n          scale("t.fluid_inverse", `v.b${i}q`, -1),\n          A("t.fluid_inversew", `v.b${i}qw`),\n          rotate("t.fluid_spin", "t.fluid_inverse", `v.liquid_torque_${i}_`),\n          ...axes.map((k, j) => A("t.fluid_spin" + k, `t.fluid_spin${k}*${inverseInertia(rig, i, j)}*256*${dt}`)),\n          rotate("t.fluid_spin", `v.b${i}q`, "t.fluid_spin"),\n          ...axes.map((k) => A(`v.b${i}w${k}`, `v.b${i}w${k}*math.pow(2.718281828459045,-v.liquid_angular_drag_${i}*${dt})+t.fluid_spin${k}`))\n        ]))\n      ])\n    ];\n    return { initialize, step };\n  }\n\n  // src/core/results.mjs\n  function createResults(rig, names = []) {\n    const requested = new Set(rig.outputs ?? []), references = names.filter((n) => n.startsWith("v.ragdoll_out_"));\n    const bodyReferences = new Set(references.flatMap((n) => /^v\\.ragdoll_out_body_(\\d+)_/.exec(n)?.slice(1).map(Number) ?? []));\n    if (references.some((n) => /^v\\.ragdoll_out_(active|paused|sleeping|time|center_|min_|max_|body_count)/.test(n))) requested.add("state");\n    if (references.some((n) => n.startsWith("v.ragdoll_out_contact_"))) requested.add("contacts");\n    if (references.some((n) => n.includes("liquid") || n.includes("submerged"))) requested.add("liquids");\n    const initialize = [], frame = [], contacts = [], liquids = [], prefix = "v.ragdoll_out_";\n    const declare = (name, value = 0) => initialize.push(A(prefix + name, value));\n    const seq = (name) => A(prefix + name, `math.mod(${prefix + name},16777214)+1`);\n    if (requested.has("state")) {\n      for (const key of ["active", "paused", "sleeping", "time", "body_count", ...axes.flatMap((k) => ["center_" + k, "min_" + k, "max_" + k])]) declare(key, key === "body_count" ? rig.bodies.length : 0);\n      frame.push(\n        A(prefix + "active", "v.active"),\n        A(prefix + "paused", "v.active&&(v.ragdoll_control_mode==3||v.ragdoll_simulation_time_scale==0)"),\n        A(prefix + "sleeping", `v.active&&v.sleep>=${Math.max(1, Math.round(rig.simulation.sleep.seconds * rig.simulation.frequency))}`),\n        A(prefix + "time", "v.age"),\n        If("v.active", [\n          A("t.result_mass", rig.bodies.map((_, i) => materialValue(rig, i, "mass")).join("+")),\n          axes.map((k) => A(prefix + "center_" + k, `v.o${k}+(${rig.bodies.map((_, i) => `v.b${i}${k}*${materialValue(rig, i, "mass")}`).join("+")})/t.result_mass`)),\n          vector(prefix + "min_", [1e6, 1e6, 1e6]),\n          vector(prefix + "max_", [-1e6, -1e6, -1e6]),\n          rig.shapes.map((s) => [\n            vector("t.result_local", s.center, 1 / 16),\n            rotate("t.result_offset", `v.b${s.body}q`, "t.result_local"),\n            ...Array.from({ length: 8 }, (_, i) => [\n              vector("t.result_corner", s.half.map((n, k) => `(${n})*${(i & 1 << k ? 1 : -1) / 16}`)),\n              vector("t.result_sq", s.quaternion.slice(0, 3)),\n              A("t.result_sqw", s.quaternion[3]),\n              rotate("t.result_corner", "t.result_sq", "t.result_corner"),\n              rotate("t.result_corner", `v.b${s.body}q`, "t.result_corner"),\n              ...axes.flatMap((k) => [\n                A("t.result_world" + k, `v.o${k}+v.b${s.body}${k}+t.result_offset${k}+t.result_corner${k}`),\n                A(prefix + "min_" + k, `math.min(${prefix}min_${k},t.result_world${k})`),\n                A(prefix + "max_" + k, `math.max(${prefix}max_${k},t.result_world${k})`)\n              ])\n            ])\n          ])\n        ])\n      );\n    }\n    rig.bodies.forEach((_, i) => {\n      if (!requested.has("bodies") && !bodyReferences.has(i)) return;\n      const out = prefix + `body_${i}_`;\n      const fields = [...axes.flatMap((k) => ["position_" + k, "velocity_" + k, "angular_velocity_" + k]), ...quat.map((k) => "rotation_" + k)];\n      fields.forEach((k) => declare(`body_${i}_` + k, k === "rotation_w" ? 1 : 0));\n      frame.push(If("v.active", [\n        ...axes.flatMap((k) => [A(out + "position_" + k, `v.o${k}+v.b${i}${k}`), A(out + "velocity_" + k, `v.b${i}v${k}`), A(out + "angular_velocity_" + k, `v.b${i}w${k}`)]),\n        ...quat.map((k) => A(out + "rotation_" + k, `v.b${i}q${k}`))\n      ]));\n    });\n    if (requested.has("contacts")) {\n      for (const key of ["contact_seq", "contact_count", "contact_overflow", "contact_capacity"]) declare(key, key === "contact_capacity" ? rig.simulation.contactLimit : 0);\n      contacts.push(A(prefix + "contact_count", "v.contact_count"), A(prefix + "contact_overflow", "v.contact_overflow"), If("v.contact_count>0", seq("contact_seq")));\n      for (let i = 0; i < rig.simulation.contactLimit; i++) {\n        const out = prefix + `contact_${i}_`, c = rig.simulation.contactLimit > 128 ? `v.contact_sorted_${i}_` : `v.c${i}`;\n        for (const k of ["body_a", "body_b", "impulse", ...axes.flatMap((k2) => ["position_" + k2, "normal_" + k2])]) declare(`contact_${i}_` + k, k.startsWith("body") ? -1 : 0);\n        const bodyPosition = (which, k) => rig.bodies.reduceRight((rest, _, j) => `(${which}==${j}?v.d${j}${k}:${rest})`, "0");\n        contacts.push(If(`v.contact_count>${i}`, [\n          A(out + "body_a", `${c}hi<${rig.bodies.length}?${c}hi:-1`),\n          A(out + "body_b", `${c}lo<${rig.bodies.length}?${c}lo:-1`),\n          A(out + "impulse", `${c}l2/16`),\n          ...axes.flatMap((k) => [A(out + "normal_" + k, `${c}n${k}`), A(out + "position_" + k, `v.o${k}+((${bodyPosition(c + "hi", k)})+${c}ra${k}+(${bodyPosition(c + "lo", k)})+${c}rb${k})/32`)])\n        ]));\n      }\n      frame.push(If("!v.active", A(prefix + "contact_count", 0)));\n    }\n    if (requested.has("liquids")) {\n      declare("liquid_seq");\n      declare("liquid_body", -1);\n      declare("liquid_entered");\n      rig.bodies.forEach((_, i) => {\n        declare(`body_${i}_submerged`);\n        declare(`body_${i}_liquid_region`, -1);\n        declare(`body_${i}_liquid_seq`);\n        declare(`body_${i}_liquid_entered`);\n        liquids.push(\n          If(`(${prefix}body_${i}_submerged>0)!=(v.liquid_fraction_${i}>0)`, [\n            seq("liquid_seq"),\n            A(prefix + "liquid_body", i),\n            A(prefix + "liquid_entered", `v.liquid_fraction_${i}>0`),\n            seq(`body_${i}_liquid_seq`),\n            A(prefix + `body_${i}_liquid_entered`, `v.liquid_fraction_${i}>0`)\n          ]),\n          A(prefix + `body_${i}_submerged`, `v.liquid_fraction_${i}`),\n          A(prefix + `body_${i}_liquid_region`, `v.liquid_region_${i}`)\n        );\n      });\n    }\n    return { initialize, frame, contacts, liquids };\n  }\n\n  // src/core/program.mjs\n  var quaternion = (out, values) => quat.map((k, i) => A(out + k, values[i]));\n  var inverse = (out, q) => [scale(out, q, -1), A(out + "w", q + "w")];\n  var reflected = (out, q) => [A(out + "x", `-${q}x`), A(out + "y", `-${q}y`), A(out + "z", q + "z"), A(out + "w", q + "w")];\n  function modelQuaternion(out, angles) {\n    return [\n      axisRotation("t.euler_x", "x", `-(${angles[0]})`),\n      axisRotation("t.euler_y", "y", angles[1]),\n      axisRotation("t.euler_z", "z", `-(${angles[2]})`),\n      multiply("t.euler_xy", "t.euler_y", "t.euler_x"),\n      multiply(out, "t.euler_z", "t.euler_xy")\n    ];\n  }\n  function modelEuler(out, q) {\n    return [\n      A("t.sy", `math.clamp(2*(${q}w*${q}y-${q}z*${q}x),-1,1)`),\n      A(out + "y", "math.asin(t.sy)"),\n      If("math.abs(t.sy)<0.999999", [\n        A(out + "x", `-math.atan2(2*(${q}w*${q}x+${q}y*${q}z),1-2*(${q}x*${q}x+${q}y*${q}y))`),\n        A(out + "z", `-math.atan2(2*(${q}w*${q}z+${q}x*${q}y),1-2*(${q}y*${q}y+${q}z*${q}z))`)\n      ], [A(out + "x", `-math.atan2(2*(${q}w*${q}x-${q}y*${q}z),1-2*(${q}x*${q}x+${q}z*${q}z))`), A(out + "z", 0)])\n    ];\n  }\n  function anchorPrograms() {\n    return {\n      initialize: [set("v.anchor_", { ready: 0, tick: -1 }), ...["p", "c", "r"].map((key) => vector("v.anchor_" + key, [0, 0, 0]))],\n      frame: [\n        A("v.anchor_now", "math.floor(q.life_time*20+0.001)"),\n        A("v.anchor_alpha", "math.clamp(q.frame_alpha,0,1)"),\n        A("v.anchor_reset", "!v.anchor_ready||v.anchor_now<v.anchor_tick||v.anchor_now-v.anchor_tick>1||q.delta_time>0.25||math.abs(v.ex-v.anchor_cx)+math.abs(v.ey-v.anchor_cy)+math.abs(v.ez-v.anchor_cz)>4"),\n        If("v.anchor_reset", [copy("v.anchor_p", "v.e"), copy("v.anchor_c", "v.e"), A("v.anchor_tick", "v.anchor_now"), A("v.anchor_ready", 1)]),\n        If("v.anchor_now!=v.anchor_tick", [copy("v.anchor_p", "v.anchor_c"), A("v.anchor_tick", "v.anchor_now")]),\n        copy("v.anchor_c", "v.e"),\n        axes.map((k) => A("v.anchor_r" + k, `math.lerp(v.anchor_p${k},v.anchor_c${k},v.anchor_alpha)`))\n      ]\n    };\n  }\n  function poseCapture(rig, normalScale) {\n    return [\n      A("v.pose_valid", 1),\n      A("v.pose_scale", normalScale),\n      A("v.pose_yaw", "q.body_y_rotation"),\n      rig.bodies.map((body, i) => [\n        A("t.bone", `q.bone_orientation_trs(\'${body.bone}\')`),\n        axes.map((k) => A(`v.pose${i}t${k}`, `t.bone.t.${k}`)),\n        axes.map((k) => A(`v.pose${i}s${k}`, `t.bone.s.${k}`)),\n        modelQuaternion(`v.pose${i}q`, axes.map((k) => `t.bone.r.${k}`)),\n        If(axes.map((k) => `math.abs(t.bone.s.${k})<0.000001`).join("||"), A("v.pose_valid", 0))\n      ])\n    ];\n  }\n  function gaussian(out, amount) {\n    return [A("t.random_a", "math.max(0.000001,1-math.random(0,1))"), A("t.random_b", "math.random(0,360)"), A(out, `math.sqrt(-2*math.ln(t.random_a))*math.cos(t.random_b)*${amount}`)];\n  }\n  function activate(rig) {\n    const { bodies, joints, simulation: s } = rig, poseKeys = [...axes, ...quat.map((k) => "q" + k)];\n    return [\n      set("v.", { active: 1, activated: 1, accum: 0, sleep: 0, tick: 0, age: 0, steps: 0, alpha: 0 }),\n      copy("v.o", "v.e"),\n      A("v.model_scale", rig.scale),\n      axisRotation("t.entityq", "y", "-v.pose_yaw"),\n      bodies.map((body, i) => {\n        const b = `v.b${i}`, p = `v.pose${i}`;\n        return [\n          vector("t.center", body.modelCenter.map((n, k) => `((${n})-(${body.pivot[k]}))*${p}s${axes[k]}`)),\n          rotate("t.center", p + "q", "t.center"),\n          add("t.center", "t.center", p + "t"),\n          A("t.centerz", "-t.centerz"),\n          scale("t.center", "t.center", "v.pose_scale/16"),\n          rotate(b, "t.entityq", "t.center"),\n          reflected("t.physicalq", p + "q"),\n          multiply(b + "q", "t.entityq", "t.physicalq")\n        ];\n      }),\n      joints.map((j, i) => [\n        vector(`v.j${i}base_a`, j.anchorA),\n        vector(`v.j${i}base_b`, j.anchorB),\n        vector("t.offset", j.transitionAnchorA),\n        add(`v.j${i}a`, `v.j${i}base_a`, "t.offset"),\n        vector("t.offset", j.transitionAnchorB),\n        add(`v.j${i}b`, `v.j${i}base_b`, "t.offset"),\n        ...[false, true].map((twist) => [\n          vector("t.axis", twist ? j.twistAxisA : j.axisA),\n          rotate("t.axis_a", `v.b${j.a}q`, "t.axis"),\n          vector("t.axis", twist ? j.twistAxisB : j.axisB),\n          rotate("t.axis_b", `v.b${j.b}q`, "t.axis"),\n          A(`v.j${i}${twist ? "twist" : "swing"}`, `math.acos(math.clamp(${dot("t.axis_a", "t.axis_b")},-1,1))`)\n        ])\n      ]),\n      gaussian("t.spin_xa", s.initialSpin),\n      gaussian("t.spin_ya", s.initialSpin),\n      gaussian("t.spin_xb", s.initialSpin),\n      gaussian("t.spin_yb", s.initialSpin),\n      vector("v.spin", ["(t.spin_xa+t.spin_xb)*3.141592653589793", "(t.spin_ya+t.spin_yb)*3.141592653589793", 0]),\n      bodies.map((body, i) => {\n        const b = `v.b${i}`;\n        return [\n          copy(b + "prev", b, poseKeys),\n          copy(b + "old", b, poseKeys),\n          axes.map((k, j) => A(b + "v" + k, `v.input_${k}*${s.initialVelocity[j]}`)),\n          scale(b + "w", "v.spin", i === 0 ? 2 : `math.min(1,(${body.mass})/(${bodies[0].mass}))`)\n        ];\n      })\n    ];\n  }\n  function interpolatedBodies(rig) {\n    return rig.bodies.map((_, i) => {\n      const b = `v.b${i}`;\n      return [\n        axes.map((k) => A(`v.render${i}${k}`, `${b}prev${k}+(${b}${k}-${b}prev${k})*v.alpha`)),\n        A("t.sign", `(${dot(b + "q", b + "prevq", quat)})<0?-1:1`),\n        quat.map((k) => A("t.q" + k, `${b}prevq${k}+(${b}q${k}*t.sign-${b}prevq${k})*v.alpha`)),\n        normalize("t.q", quat),\n        copy(`v.render${i}q`, "t.q", quat)\n      ];\n    });\n  }\n  function boneOutput(rig, index) {\n    const body = rig.bodies[index], parent = body.parent;\n    const transform = (i, out) => [\n      axisRotation("t.entity_inverse", "y", "q.body_y_rotation"),\n      axes.map((k) => A("t.center" + k, `v.o${k}-v.anchor_r${k}+v.render${i}${k}`)),\n      rotate(out + "c", "t.entity_inverse", "t.center"),\n      scale(out + "c", out + "c", "16/v.model_scale"),\n      A(out + "cz", `-${out}cz`),\n      multiply("t.physicalq", "t.entity_inverse", `v.render${i}q`),\n      reflected(out + "q", "t.physicalq"),\n      vector("t.bind_center", rig.bodies[i].modelCenter),\n      rotate("t.bind_center", out + "q", "t.bind_center"),\n      sub(out + "t", out + "c", "t.bind_center")\n    ];\n    return [\n      transform(index, "t.body_"),\n      ...parent >= 0 ? transform(parent, "t.parent_") : [quaternion("t.parent_q", [0, 0, 0, 1]), vector("t.parent_t", [0, 0, 0])],\n      vector("t.chain_t", body.parentTransform.t),\n      rotate("t.chain_t", "t.parent_q", "t.chain_t"),\n      add("t.parent_t", "t.parent_t", "t.chain_t"),\n      quaternion("t.chain_q", body.parentTransform.q),\n      multiply("t.parent_q", "t.parent_q", "t.chain_q"),\n      inverse("t.parent_inverse", "t.parent_q"),\n      sub("t.local_center", "t.body_c", "t.parent_t"),\n      rotate("t.local_center", "t.parent_inverse", "t.local_center"),\n      multiply("t.local_q", "t.parent_inverse", "t.body_q"),\n      vector("t.pivot", body.pivot),\n      vector("t.offset", body.modelCenter.map((n, k) => `(${n})-(${body.pivot[k]})`)),\n      rotate("t.offset", "t.local_q", "t.offset"),\n      axes.map((k) => A(`v.out${index}p${k}`, `t.local_center${k}-t.pivot${k}-t.offset${k}`)),\n      modelEuler(`v.out${index}r`, "t.local_q"),\n      axes.map((k, j) => A(`v.out${index}r${k}`, `v.out${index}r${k}-(${body.bindRotation[j]})`))\n    ];\n  }\n  function createProgram(rig, { preview = false, reservedNames = [] } = {}) {\n    const s = rig.simulation, dt = 1 / s.frequency, anchor = anchorPrograms(), d = createDynamics(rig, s), input = createInputs(rig), liquids = createLiquids(rig), results = createResults(rig, reservedNames), poseKeys = [...axes, ...quat.map((k) => "q" + k)];\n    let variant = String(rig.variants.length - 1);\n    for (let i = rig.variants.length - 2; i >= 0; i--) variant = `(${rig.variants[i].when})?${i}:(${variant})`;\n    let initialize = [\n      set("v.", { active: 0, activated: 0, variant: 0, accum: 0, sleep: 0, tick: 0, age: 0, steps: 0, alpha: 0, has_position: 0, pose_valid: 0, frames: 0, model_scale: 1 }),\n      vector("v.last_", [0, 0, 0]),\n      anchor.initialize,\n      input.initialize,\n      liquids.initialize,\n      results.initialize,\n      rig.bodies.map((_, i) => [\n        set(`v.b${i}`, Object.fromEntries([...poseKeys, ...poseKeys.map((k) => "prev" + k), ...poseKeys.map((k) => "old" + k), ...axes.flatMap((k) => ["v" + k, "w" + k])].map((k) => [k, k.endsWith("qw") ? 1 : 0]))),\n        vector(`v.render${i}`, [0, 0, 0]),\n        quaternion(`v.render${i}q`, [0, 0, 0, 1])\n      ]),\n      d.initializeDynamics()\n    ];\n    const begin = [\n      axes.map((k, i) => A("v.e" + k, `q.position(${i})`)),\n      anchor.frame,\n      A("v.steps", 0),\n      A("v.activated", 0),\n      axes.map((k) => A("v.input_" + k, `v.has_position?(v.e${k}-v.last_${k})/math.max(q.delta_time,0.001):0`)),\n      copy("v.last_", "v.e"),\n      A("v.has_position", 1),\n      input.frame,\n      If(`v.active&&(v.ragdoll_control_mode==2||(v.ragdoll_control_mode==0&&(${rig.release})))`, [A("v.active", 0), A("v.accum", 0), A("v.pose_valid", 0), A("v.frames", 0)]),\n      If("!v.active", [\n        A("v.variant", variant),\n        If("v.frames>0", poseCapture(rig, rig.scale)),\n        If(`(v.ragdoll_control_mode==1||v.ragdoll_control_mode==3||(v.ragdoll_control_mode==0&&(${rig.trigger})))&&v.pose_valid`, activate(rig)),\n        A("v.frames", "v.frames+1")\n      ]),\n      input.properties,\n      input.motion,\n      If("v.active&&!v.activated&&v.ragdoll_control_mode!=3&&v.ragdoll_simulation_time_scale>0", [A("v.accum", `math.min(v.accum+math.max(q.delta_time,0)*math.clamp(v.ragdoll_simulation_time_scale,0,2),${dt * 3})`), A("v.steps", `math.floor(v.accum*${s.frequency}+0.00001)`), A("v.accum", `math.max(0,v.accum-v.steps*${dt})`), A("v.alpha", `math.clamp(v.accum*${s.frequency},0,1)`)])\n    ];\n    const sleepTicks = Math.max(1, Math.round(s.sleep.seconds * s.frequency)), checkTicks = Math.max(1, Math.round(s.sleep.checkInterval * s.frequency));\n    const tick = [\n      A("v.tick", "v.tick+1"),\n      A("v.age", `v.age+${dt}`),\n      rig.bodies.map((_, i) => copy(`v.b${i}prev`, `v.b${i}`, poseKeys)),\n      input.forces,\n      liquids.step,\n      results.liquids,\n      A("v.was_sleeping", `v.sleep>=${sleepTicks}`),\n      A("v.awake", `v.sleep<${sleepTicks}||math.mod(v.tick,${checkTicks})==0`)\n    ];\n    const finish = [\n      A("t.motion", rig.bodies.map((_, i) => `(${dot(`v.b${i}v`, `v.b${i}v`)})`).reduce((a, b) => `math.max(${a},${b})`)),\n      A("v.sleep", `v.support&&t.motion<${s.sleep.speed ** 2}?math.min(${sleepTicks},v.sleep+1):math.max(0,v.sleep-1/3)`),\n      If(`v.sleep>=${sleepTicks}`, rig.bodies.map((_, i) => [vector(`v.b${i}v`, [0, 0, 0]), vector(`v.b${i}w`, [0, 0, 0]), If("v.was_sleeping", copy(`v.b${i}`, `v.b${i}prev`, poseKeys), copy(`v.b${i}prev`, `v.b${i}`, poseKeys))]))\n    ];\n    const anchors = rig.joints.map((j, i) => [...["A", "B"].map((side) => axes.map((k, n) => A(`v.j${i}${side.toLowerCase()}${k}`, `v.j${i}base_${side.toLowerCase()}${k}+(${j["transitionAnchor" + side][n]})*math.max(0,1-v.age/${s.poseTransition})`)))]);\n    const dynamics = [[anchors, d.prepareBodies()], d.bodyContacts(), d.terrainContacts(), d.sortContacts(), ...d.solverChunks(), results.contacts, d.integrateBodies(), finish];\n    let frameBlocks = [\n      compactBegin(rig, begin, poseCapture(rig, rig.scale), activate(rig)),\n      ...Array.from({ length: 3 }, (_, i) => [If("v.active&&v.steps>" + i, [tick, If("v.awake", dynamics)])]),\n      [If("v.active", [interpolatedBodies(rig), compactOutput(rig, boneOutput)]), results.frame]\n    ];\n    let rootOutputs = rig.bodies.map((_, i) => boneOutput(rig, i));\n    const lowered = lowerRecords({ initialize: groupVariables(initialize), frame: frameBlocks.map(groupVariables), rootOutputs: rootOutputs.map(groupVariables) });\n    initialize = lowered.initialize;\n    frameBlocks = lowered.frame;\n    rootOutputs = lowered.rootOutputs;\n    if (preview) return { initialize, frameChunks: frameBlocks, rootOutputs };\n    const frequencyText = emit([initialize, frameBlocks, rig.bodies.flatMap((b, i) => b.parent < 0 ? Array.from({ length: 6 }, () => rootOutputs[i]) : [])]);\n    const assigned = /* @__PURE__ */ new Set();\n    const visit = (nodes) => {\n      for (const n of nodes.flat(Infinity)) {\n        if (n.kind === "set") assigned.add(n.name);\n        if (n.kind === "if") {\n          visit(n.yes);\n          visit(n.no);\n        }\n        if (n.kind === "loop") visit(n.body);\n      }\n    };\n    visit([initialize, frameBlocks, rootOutputs]);\n    const external = [...frequencyText.matchAll(/(?<![\\w.])v\\.\\w+/g)].map((m) => m[0]).filter((name) => !assigned.has(name));\n    const namespace = minifier({ frequencyText, reservedNames, externalNames: external });\n    const source = (nodes, target = "molang") => target === "molang" ? namespace(emit(nodes)) : emit(nodes, target);\n    const initializeChunks = splitStatements(initialize, source, { prefix: "init" });\n    const frameChunks = frameBlocks.flatMap((nodes, i) => splitStatements(nodes, source, { prefix: `chunk${i}` }));\n    const animation = (target = "molang") => ({ loop: true, override_previous_animation: true, bones: Object.fromEntries(rig.bodies.map((body, i) => [body.bone, {\n      position: axes.map((k) => {\n        const value = target === "molang" ? namespace(`v.out${i}p${k}`) : `v.out${i}p${k}`;\n        return body.parent < 0 ? `${source(rootOutputs[i], target)}return ${value};` : value;\n      }),\n      rotation: axes.map((k) => {\n        const value = target === "molang" ? namespace(`v.out${i}r${k}`) : `v.out${i}r${k}`;\n        return body.parent < 0 ? `${source(rootOutputs[i], target)}return ${value};` : value;\n      }),\n      scale: [1, 1, 1]\n    }])) });\n    return { initialize, frameChunks, rootOutputs, source, animation, names: namespace.roots, initializeSources: initializeChunks.map((nodes) => source(nodes)), frameSources: frameChunks.map((nodes) => source(nodes)) };\n  }\n  var testMath = {\n    ...Object.fromEntries(["sqrt", "abs", "min", "max", "floor", "ln", "pow"].map((k) => [k, k === "ln" ? Math.log : Math[k]])),\n    random: (a, b) => a + (b - a) * Math.random(),\n    sin: (x) => Math.sin(x * Math.PI / 180),\n    cos: (x) => Math.cos(x * Math.PI / 180),\n    acos: (x) => Math.acos(x) * 180 / Math.PI,\n    asin: (x) => Math.asin(x) * 180 / Math.PI,\n    atan2: (y, x) => Math.atan2(y, x) * 180 / Math.PI,\n    clamp: (v, a, b) => Math.min(b, Math.max(a, v)),\n    mod: (a, b) => a % b,\n    lerp: (a, b, t2) => a + (b - a) * t2\n  };\n\n  // src/rig.js\n  var PARENT_END = ["anchorA", "axisA", "twistAxisA", "transitionAnchorA"];\n  var ENDS = [...PARENT_END, "anchorB", "axisB", "twistAxisB", "transitionAnchorB"];\n\n  // src/config.js\n  var clone = (value) => JSON.parse(JSON.stringify(value));\n\n  // src/export.js\n  function adaptClient(original, rig, program, id) {\n    const result = clone(original), c = result["minecraft:client_entity"].description, s = c.scripts ??= {};\n    const animations = { ...c.animations }, animate = [...s.animate ?? []];\n    for (const [i, entry] of (c.animation_controllers ?? []).entries()) for (const [name, value] of Object.entries(entry)) {\n      const alias2 = `ragdoll_original_${i}_${name}`;\n      animations[alias2] = value;\n      animate.push(alias2);\n    }\n    const key = "ragdoll_generated";\n    if (key in animations) fail("alias", [key]);\n    if ("ragdoll_input" in animations) fail("alias", ["ragdoll_input"]);\n    animations[key] = id;\n    animations.ragdoll_input = INPUT_ANIMATION;\n    delete c.animation_controllers;\n    c.animations = animations;\n    const atLeast = (version, min) => version.split(".").map(Number).reduce((a, n, i) => a || Math.sign(n - (min[i] ?? 0)), 0) < 0 ? min.join(".") : version;\n    result.format_version = atLeast(String(result.format_version ?? "1.10.0"), [1, 20, 60]);\n    c.min_engine_version = atLeast(String(c.min_engine_version ?? "1.10.0"), [1, 26, 0]);\n    const alias = (g) => Object.entries(c.geometry).find(([, value]) => value === g)?.[0];\n    let query = `geometry.${alias(rig.variants.at(-1).geometry)}`;\n    for (let i = rig.variants.length - 2; i >= 0; i--) query = `(${rig.variants[i].when})?geometry.${alias(rig.variants[i].geometry)}:(${query})`;\n    c.queryable_geometry = query;\n    const condition = (entry) => typeof entry === "string" ? { [entry]: "!v.ragdoll_active" } : Object.fromEntries(Object.entries(entry).map(([name, value]) => [name, `(!v.ragdoll_active)*(${typeof value === "boolean" ? Number(value) : value})`]));\n    c.scripts = { ...s, initialize: [...s.initialize ?? [], ...program.initializeSources], pre_animation: [...s.pre_animation ?? [], ...program.frameSources], animate: [...animate.map(condition), { [key]: "v.ragdoll_active" }], should_update_bones_and_effects_offscreen: true };\n    return result;\n  }\n  function resourceVariables(resources, original) {\n    const names = new Set(resources.reservedVariables ?? []);\n    for (const value of [...resources.json?.values() ?? [], original].filter(Boolean)) for (const [name] of JSON.stringify(value).matchAll(/\\b(?:v|variable)\\.\\w+/gi)) names.add(name.toLowerCase().replace(/^variable\\./, "v."));\n    return [...names];\n  }\n  function generateEntity(resources, config, original) {\n    const client = original["minecraft:client_entity"].description, rig = outputModel(config, resources, client);\n    const program = createProgram(rig, { reservedNames: resourceVariables(resources, original) }), name = client.identifier.replaceAll(":", "_"), animationId = `animation.ragdoll.${name}`;\n    const definition = JSON.stringify(adaptClient(original, rig, program, animationId));\n    return { rig, program, name, animationId, definition, bytes: new TextEncoder().encode(definition).byteLength };\n  }\n  async function estimateOutputLevels(resources, config, original, { cancelled = () => false, update = () => {\n  } } = {}) {\n    const levels = [], seen = /* @__PURE__ */ new Map();\n    for (const level of [...OUTPUT_LEVELS].reverse()) {\n      await new Promise((resolve) => setTimeout(resolve, 0));\n      if (cancelled()) return;\n      const model = { ...config, outputLevel: level }, rig = outputModel(model, resources, original["minecraft:client_entity"].description);\n      const signature = JSON.stringify([rig.simulation, rig.shapePairs, rig.contactFriction]);\n      if (seen.has(signature)) {\n        seen.get(signature).levels.push(level);\n        update(levels.map((entry2) => ({ ...entry2, levels: [...entry2.levels] })).reverse());\n        continue;\n      }\n      const { bytes } = generateEntity(resources, model, original);\n      const entry = { level, bytes, levels: [level] };\n      seen.set(signature, entry);\n      levels.push(entry);\n      update(levels.map((entry2) => ({ ...entry2, levels: [...entry2.levels] })).reverse());\n    }\n    return levels.reverse();\n  }\n\n  // src/output-worker.js\n  self.onmessage = async ({ data: { resources, config, original } }) => {\n    try {\n      await estimateOutputLevels(resources, config, original, { update: (levels) => self.postMessage({ levels }) });\n      self.postMessage({ done: true });\n    } catch (error) {\n      self.postMessage({ error: { key: error.key, values: error.values, message: error.message } });\n    }\n  };\n})();\n'], { type: "text/javascript" }));
            const worker = new Worker(url);
            URL.revokeObjectURL(url);
            this.outputWorker = worker;
            const finish = (error) => {
              worker.terminate();
              if (!cancelled()) {
                this.outputWorker = null;
                this.state.outputPending = false;
                if (error) this.state.error = error;
              }
            };
            worker.onmessage = ({ data }) => {
              if (cancelled()) return;
              if (data.levels) this.state.outputLevels = data.levels;
              if (data.done || data.error) finish(data.error?.key ? t("error." + data.error.key, data.error.values) : data.error?.message);
            };
            worker.onerror = (event) => {
              event.preventDefault();
              finish(event.message);
            };
            worker.postMessage({ resources: outputResources, config, original: clone(original) });
            return;
          } catch (error) {
            this.outputWorker?.terminate();
            this.outputWorker = null;
          }
        }
        try {
          await estimateOutputLevels(outputResources, config, clone(original), { cancelled, update: (levels) => {
            if (!cancelled()) this.state.outputLevels = levels;
          } });
        } catch (error) {
          if (!cancelled()) this.state.error = errorText(error);
        } finally {
          if (!cancelled()) this.state.outputPending = false;
        }
      }, 180);
    }
    validateSelection(config) {
      const s = this.state, sel = s.selected;
      let next = sel;
      if (sel.type === "body" && config.bodies[sel.body]) next = { type: "body", body: sel.body, bone: config.bodies[sel.body].bone };
      else if (sel.type === "bone" || sel.type === "body") {
        const body = Object.keys(config.bodies).find((id) => config.bodies[id].bone === sel.bone);
        next = body ? { type: "body", body, bone: sel.bone } : Group.all.some((g) => g.name === sel.bone) ? { type: "bone", bone: sel.bone } : { type: "entity" };
      } else if (sel.type === "shape") next = config.bodies[sel.body] && sel.index < this.shapeCount(config, sel.body) ? sel : { type: "entity" };
      else if (sel.type === "joint") next = config.joints[sel.joint] ? sel : { type: "entity" };
      if (JSON.stringify(next) !== JSON.stringify(sel)) s.selected = next;
    }
    shapeCount(config, id) {
      return this.infos?.[this.state.variant]?.bodies[id]?.shapes.length ?? effective(config, this.state.variant, "bodies", id).shapes?.length ?? 1;
    }
    // Bones in outliner order; each body lists its joint to the parent body and its collision boxes.
    buildTree(config) {
      const s = this.state, sel = s.selected, rows = [], byBone = new Map(Object.entries(config.bodies).map(([id, b]) => [b.bone, id]));
      rows.push({ key: "entity", type: "entity", depth: 0, label: s.entity, icon: "accessibility_new", selected: sel.type === "entity" });
      const visit = (group, depth) => {
        const body = byBone.get(group.name), children = group.children.filter((c) => c instanceof Group), folded = s.collapsed.includes(group.name);
        const joints = body ? Object.entries(config.joints).filter(([, j]) => j.b === body) : [], shapes = body ? this.shapeCount(config, body) : 0;
        rows.push({
          key: "bone:" + group.name,
          type: body ? "body" : "bone",
          bone: group.name,
          body,
          depth,
          label: group.name,
          icon: body ? "fa-cube" : "folder",
          hasBody: !!body,
          foldable: children.length + joints.length + shapes > 0,
          folded,
          selected: body ? sel.type === "body" && sel.body === body : sel.type === "bone" && sel.bone === group.name
        });
        if (folded) return;
        for (const [id, j] of joints) rows.push({ key: "joint:" + id, type: "joint", joint: id, body, depth: depth + 1, label: id, detail: t("joint_parent", [j.a]), icon: "adjust", selected: sel.type === "joint" && sel.joint === id });
        for (let i = 0; i < shapes; i++) rows.push({ key: `shape:${body}:${i}`, type: "shape", body, index: i, depth: depth + 1, label: t("shape_n", [i + 1]), icon: "crop_square", selected: sel.type === "shape" && sel.body === body && sel.index === i });
        for (const child of children) visit(child, depth + 1);
      };
      for (const node of Outliner.root) if (node instanceof Group) visit(node, 1);
      return rows;
    }
    // Values for the properties panel, converted to the coordinates Blockbench shows.
    buildProps(config, infos) {
      const s = this.state, sel = s.selected, v = s.variant, info = infos?.[v];
      if (sel.type === "entity") return {
        type: "entity",
        trigger: config.trigger ?? TRIGGERS.hurt,
        release: config.release ?? RELEASES.healed,
        outputLevel: config.outputLevel ?? "standard",
        simulation: { frequency: 20, iterations: 6, contactLimit: 128, gravity: 9.82, ...config.simulation },
        pairs: (config.collisionPairs ?? []).length,
        bodies: Object.keys(config.bodies).length,
        joints: Object.keys(config.joints).length
      };
      if (sel.type === "bone") return { type: "bone", bone: sel.bone, owner: info ? nearestBody(config, info.bones, sel.bone) : null };
      if (!info) return null;
      if (sel.type === "body") {
        const body = info.bodies[sel.body], raw = effective(config, v, "bodies", sel.body);
        return {
          type: "body",
          id: sel.body,
          bone: body.bone,
          massMode: body.explicitMass ? "mass" : "density",
          mass: body.mass,
          density: body.density,
          center: displayVector(body.center),
          explicitCenter: body.explicitCenter,
          friction: body.friction,
          restitution: body.restitution,
          linearDamping: body.linearDamping,
          angularDamping: body.angularDamping,
          shapes: body.shapes.length,
          collisions: Object.keys(config.bodies).filter((id) => id !== sel.body).map((id) => ({ id, enabled: (config.collisionPairs ?? []).some((p) => p.includes(id) && p.includes(sel.body)) })),
          joint: Object.keys(config.joints).find((id) => config.joints[id].b === sel.body) ?? null,
          defaults: raw.density === void 0
        };
      }
      if (sel.type === "shape") {
        const box = info.bodies[sel.body].shapes[sel.index];
        return { type: "shape", body: sel.body, index: sel.index, count: info.bodies[sel.body].shapes.length, position: displayVector(shapePosition(box)), size: [...box.size], rotation: displayRotation(box.rotation ?? [0, 0, 0]) };
      }
      if (sel.type === "joint") {
        const frame = jointFrame(config, info, v, sel.joint), j = effective(config, v, "joints", sel.joint);
        if (!frame) return null;
        return {
          type: "joint",
          id: sel.joint,
          a: j.a,
          b: j.b,
          bodies: Object.keys(config.bodies),
          position: displayVector(frame.position),
          rotation: displayRotation(frame.rotation),
          customPosition: Math.hypot(...sub2(frame.position, info.bodies[j.b].pivot)) > 1e-4,
          customRotation: frame.rotation.some((n) => Math.abs(n) > 1e-4),
          swing: j.swing ?? 45,
          twist: j.twist ?? 22.5,
          mismatch: frame.mismatch
        };
      }
      return null;
    }
    draw(config, infos, keepGizmo = false) {
      if (!keepGizmo) this.gizmo.clear();
      const context = this.context();
      config ??= context?.config;
      infos ??= this.infos;
      if (!this.active() || this.preview.state || !config || !infos?.[this.state.variant]) {
        this.overlay.clear();
        return;
      }
      try {
        this.overlay.draw(config, infos[this.state.variant], this.state.variant, this.state.selected);
        if (!keepGizmo) {
          const target = this.gizmoTarget(config, infos);
          if (target) this.gizmo.attach(target);
        }
      } catch (error) {
        console.error(error);
        this.overlay.clear();
        this.gizmo.clear();
      }
    }
    // The gizmo follows the active ragdoll tool, like the native transform tools.
    gizmoTarget(config, infos) {
      const sel = this.state.selected, tool = this.state.tool, v = this.state.variant, info = infos[v];
      if (sel.type === "shape") {
        const box = info.bodies[sel.body]?.shapes[sel.index];
        if (!box) return null;
        return { bone: info.bodies[sel.body].bone, position: shapePosition(box), quaternion: modelRotation(box.rotation ?? [0, 0, 0]), size: box.size, mode: { move: "translate", resize: "scale", rotate: "rotate" }[tool] };
      }
      if (sel.type === "body" && tool === "move") {
        const body = info.bodies[sel.body];
        return body && { bone: body.bone, position: body.center, quaternion: [0, 0, 0, 1], mode: "translate" };
      }
      if (sel.type === "joint" && tool !== "resize") {
        const frame = jointFrame(config, info, v, sel.joint);
        return frame && { bone: frame.bone, position: frame.position, quaternion: frame.quaternion, mode: tool === "move" ? "translate" : "rotate" };
      }
      return null;
    }
    // Turns a gizmo value (bone-local position, quaternion or size) into an edit.
    gizmoEdit(value) {
      const sel = this.state.selected;
      if (sel.type === "shape") return (config, { infos, variant }) => setShape(config, infos, variant, sel.body, sel.index, value.size ? { size: value.size } : value.quaternion ? { rotation: quaternionEuler(value.quaternion) } : { position: value.position });
      if (sel.type === "body") return (config, { variant }) => setBody(config, variant, sel.body, "center", fine(value.position));
      if (sel.type === "joint") return (config, { infos, variant }) => value.quaternion ? setJointRotation(config, infos, variant, sel.joint, value.quaternion) : setJointPosition(config, infos, variant, sel.joint, value.position);
      return null;
    }
    // Panel fields map to edits; vectors arrive in Blockbench coordinates.
    operation(key2, value) {
      const sel = this.state.selected, body = sel.body, joint = sel.joint;
      if (key2.startsWith("when.")) {
        const i = Number(key2.slice(5));
        return (config) => {
          config.variants[i].when = value;
        };
      }
      if (key2.startsWith("collision.")) return (config) => setCollision(config, body, key2.slice(10), value);
      switch (key2) {
        case "scale":
          return (config, { variant }) => setScale(config, variant, Number(value));
        case "trigger":
        case "release":
          return (config) => {
            config[key2] = value;
          };
        case "outputLevel":
          return (config) => {
            if (value === "standard") delete config.outputLevel;
            else config.outputLevel = value;
          };
        case "frequency":
        case "gravity":
        case "iterations":
        case "contactLimit":
          return (config) => {
            config.simulation = { ...config.simulation, [key2]: ["iterations", "contactLimit"].includes(key2) ? Math.round(value) : Number(value) };
          };
        case "massMode":
          return (config, { infos, variant }) => setMassMode(config, infos, variant, body, value);
        case "mass":
          return (config, { variant }) => setBody(config, variant, body, "mass", Number(value));
        case "center":
          return (config, { variant }) => setBody(config, variant, body, "center", fine(displayVector(value)));
        case "density":
        case "friction":
        case "restitution":
        case "linearDamping":
        case "angularDamping":
          return (config) => setShared(config, "bodies", body, key2, Number(value));
        case "shape.position":
          return (config, { infos, variant }) => setShape(config, infos, variant, body, sel.index, { position: displayVector(value) });
        case "shape.size":
          return (config, { infos, variant }) => setShape(config, infos, variant, body, sel.index, { size: value });
        case "shape.rotation":
          return (config, { infos, variant }) => setShape(config, infos, variant, body, sel.index, { rotation: displayRotation(value) });
        case "joint.position":
          return (config, { infos, variant }) => setJointPosition(config, infos, variant, joint, displayVector(value));
        case "joint.rotation":
          return (config, { infos, variant }) => setJointRotation(config, infos, variant, joint, modelRotation(displayRotation(value)));
        case "joint.a":
        case "joint.b":
          return (config, { infos }) => setJointBody(config, infos, joint, key2.slice(6), value);
        case "swing":
        case "twist":
          return (config) => setShared(config, "joints", joint, key2, Number(value));
      }
      fail("unexpected", [key2]);
    }
    change(key2, value) {
      this.safe(() => this.commit(this.operation(key2, value)));
    }
    draftChange(key2, value) {
      try {
        this.draft(this.operation(key2, value));
      } catch (error) {
        console.warn(error);
      }
    }
    // Every edit works on a copy that must validate before it becomes one undo step.
    commit(edit, { raw = false } = {}) {
      this.preview.reset();
      this.syncGeometry();
      const context = this.context();
      if (!context) return;
      const config = clone(context.config), before = raw ? null : inspect(context.config, context.env);
      edit(config, { env: context.env, infos: before, variant: context.variant });
      prune(config);
      const after = inspect(config, context.env);
      if (before) keepAnchors(config, before, after);
      normalizeModel(config, context.resources, context.client);
      Undo.initEdit({ ragdoll: true });
      Project.bedrock_ragdoll.config = config;
      Project.bedrock_ragdoll.bindings = this.bindings(config);
      Undo.finishEdit(t("edit_label"));
      this.propagate();
      this.refresh();
    }
    // Live preview while dragging a value or the gizmo; nothing is stored.
    draft(edit) {
      const context = this.context();
      if (!context || !this.infos) return;
      const config = clone(context.config);
      edit(config, { env: context.env, infos: this.infos, variant: context.variant });
      prune(config);
      const infos = inspect(config, context.env);
      keepAnchors(config, this.infos, infos);
      this.draw(config, infos, !!this.gizmo.drag);
      this.state.props = this.buildProps(config, infos);
    }
    select(row) {
      const next = { entity: { type: "entity" }, bone: { type: "bone", bone: row.bone }, body: { type: "body", body: row.body, bone: row.bone }, shape: { type: "shape", body: row.body, index: row.index }, joint: { type: "joint", joint: row.joint } }[row.type];
      this.state.selected = next;
      this.refresh();
    }
    fold(row) {
      const c = this.state.collapsed, i = c.indexOf(row.bone);
      if (i < 0) c.push(row.bone);
      else c.splice(i, 1);
      const context = this.context();
      if (context) this.state.tree = this.buildTree(context.config);
    }
    pick(hit) {
      this.state.selected = hit?.joint ? { type: "joint", joint: hit.joint } : hit ? { type: "shape", body: hit.body, index: hit.index } : { type: "entity" };
      this.reveal();
      this.refresh();
    }
    // Unfolds the tree down to the selection.
    reveal() {
      const sel = this.state.selected, config = this.context()?.config, body = sel.body ?? config?.joints[sel.joint]?.b;
      if (!body || !config.bodies[body]) return;
      let group = Group.all.find((g) => g.name === config.bodies[body].bone);
      while (group instanceof Group) {
        const i = this.state.collapsed.indexOf(group.name);
        if (i >= 0) this.state.collapsed.splice(i, 1);
        group = group.parent;
      }
    }
    toggleBody(row) {
      if (row.hasBody) this.removeBody(row.body);
      else this.addBody(row.bone);
    }
    addBody(bone) {
      this.safe(() => this.commit((config, { env }) => {
        const body = addBody(config, env, bone);
        this.state.selected = { type: "body", body, bone };
      }));
    }
    removeBody(id) {
      const bone = this.context()?.config.bodies[id]?.bone;
      this.safe(() => this.commit((config, { env }) => {
        removeBody(config, env, id);
        this.state.selected = { type: "bone", bone };
      }));
    }
    addShape(body) {
      this.safe(() => this.commit((config, { infos }) => {
        const index = addShape(config, infos, body);
        this.state.selected = { type: "shape", body, index };
      }));
    }
    removeShape(body, index) {
      this.safe(() => this.commit((config, { infos }) => {
        removeShape(config, infos, body, index);
        this.state.selected = { type: "body", body, bone: config.bodies[body].bone };
      }));
    }
    refit(body) {
      this.safe(() => this.commit((config, { infos }) => refitShapes(config, infos, body)));
    }
    addJoint(body) {
      const context = this.context(), info = this.infos?.[this.state.variant];
      if (!context || !info) return;
      const others = Object.keys(context.config.bodies).filter((id) => id !== body);
      if (!others.length) return;
      const parent = nearestBody(context.config, info.bones, context.config.bodies[body].bone) ?? others[0];
      jointDialog(others, parent, (a) => this.safe(() => this.commit((config, { infos }) => {
        const joint = addJoint(config, infos, a, body);
        this.state.selected = { type: "joint", joint };
      })));
    }
    removeJoint(joint) {
      const body = this.context()?.config.joints[joint]?.b;
      this.safe(() => this.commit((config) => {
        removeJoint(config, joint);
        if (config.bodies[body]) this.state.selected = { type: "body", body, bone: config.bodies[body].bone };
      }));
    }
    alignJoint(joint) {
      this.safe(() => this.commit((config, { infos }) => alignJoint(config, infos, joint)));
    }
    resetJointPosition(joint) {
      this.safe(() => this.commit((config, { infos, variant }) => {
        resetJointPosition(config, variant, joint);
        alignJoint(config, infos, joint, variant);
      }));
    }
    resetJointRotation(joint) {
      this.safe(() => this.commit((config, { infos }) => {
        resetJointRotation(config, joint);
        alignJoint(config, infos, joint);
      }));
    }
    resetCenter(body) {
      this.safe(() => this.commit((config, { variant }) => clearLocal(config, variant, "bodies", body, "center")));
    }
    autoCollision() {
      this.safe(() => this.commit((config, { env }) => {
        config.collisionPairs = autoCollisionPairs(config, env);
      }));
    }
    // Bodies whose bones were deleted in Edit mode make the config invalid, so this edit skips the usual checks before the change.
    dropMissing() {
      const ids = [...this.state.missing];
      this.safe(() => this.commit((config) => {
        if (ids.length === Object.keys(config.bodies).length) fail("last_body");
        dropBodies(config, ids);
      }, { raw: true }));
    }
    rowMenu(row, event) {
      if (!row.selected) this.select(row);
      const run = (fn) => () => this.safe(fn), items = {
        entity: [
          { name: t("auto_collision"), icon: "auto_fix_high", click: run(() => this.autoCollision()) },
          { name: t("link_entity"), icon: "link", condition: () => this.state.link !== "linked", click: run(() => this.linkEntity()) },
          "_",
          { name: t("import_config"), icon: "file_upload", click: run(() => this.importConfig()) },
          { name: t("export_config"), icon: "file_download", click: run(() => this.exportConfig()) }
        ],
        bone: [{ name: t("add_body"), icon: "add_box", click: run(() => this.addBody(row.bone)) }],
        body: [
          { name: t("add_shape"), icon: "add", click: run(() => this.addShape(row.body)) },
          { name: t("refit"), icon: "fit_screen", click: run(() => this.refit(row.body)) },
          { name: t("add_joint"), icon: "adjust", click: run(() => this.addJoint(row.body)) },
          "_",
          { name: t("remove_body"), icon: "delete", click: run(() => this.removeBody(row.body)) }
        ],
        shape: [{ name: t("remove_shape"), icon: "delete", condition: () => this.shapeCount(this.context().config, row.body) > 1, click: run(() => this.removeShape(row.body, row.index)) }],
        joint: [{ name: t("align_joint"), icon: "vertical_align_center", click: run(() => this.alignJoint(row.joint)) }, "_", { name: t("remove_joint"), icon: "delete", click: run(() => this.removeJoint(row.joint)) }]
      }[row.type];
      if (items?.length) new Menu(items).open(event);
    }
    canDelete() {
      return this.active() && !this.preview.state && ["shape", "joint", "body"].includes(this.state.selected.type);
    }
    deleteSelected() {
      const sel = this.state.selected;
      if (sel.type === "shape") this.removeShape(sel.body, sel.index);
      else if (sel.type === "joint") this.removeJoint(sel.joint);
      else if (sel.type === "body") this.removeBody(sel.body);
    }
    async play() {
      if (this.state.busy || !["ragdoll", "animate"].includes(Modes.selected?.id)) return;
      this.state.busy = true;
      try {
        this.gizmo.cancel();
        this.syncGeometry();
        const context = this.context();
        if (context) await this.preview.play(context);
      } finally {
        this.state.busy = false;
      }
    }
    resetPreview() {
      this.preview.reset();
      this.refresh();
    }
    importConfig() {
      const context = this.context();
      if (!context) return;
      Blockbench.import({ type: t("config"), extensions: ["json"], readtype: "text" }, (files) => {
        if (!files[0]) return;
        this.safe(() => {
          const config = parseJson(files[0].content, files[0].name);
          delete config.$schema;
          config.variants ??= [{ geometry: "default", scale: 1 }];
          config.joints ??= {};
          config.collisionPairs ??= [];
          const shown = this.geometryId(context.data), variant = config.variants.findIndex((v) => (context.client.geometry[v.geometry] ?? v.geometry) === shown);
          if (variant < 0) fail("geometry_reference", [shown]);
          normalizeModel(config, context.resources, context.client);
          this.preview.reset();
          Undo.initEdit({ ragdoll: true });
          Object.assign(Project.bedrock_ragdoll, { config, variant, bindings: this.bindings(config) });
          Undo.finishEdit(t("import_config"));
          this.propagate();
          this.refresh();
        });
      });
    }
    exportConfig() {
      this.syncGeometry();
      const context = this.context();
      if (!context) return;
      Blockbench.export({ type: t("config"), extensions: ["json"], name: context.data.entity.replace(":", "_") + ".physics", content: JSON.stringify(context.config, null, 2) });
    }
    async exportPack(options) {
      this.preview.reset();
      this.syncGeometry();
      for (const project of ModelProject.all) {
        const data = project.bedrock_ragdoll;
        if (data?.entity) for (const id of Object.keys(data.geometries)) this.writeGeometry(data, id);
      }
      const rows = this.state.rows.filter((row) => row.selected && row.status === "ready");
      if (!rows.length) fail("selection");
      this.state.busy = true;
      try {
        const result = await generatePack(this.resources, rows, options, JSZip, (id, index, total) => {
          this.state.progress = t("generating", [id]) + ` (${index + 1}/${total})`;
        });
        const content = new Blob([result.data], { type: "application/zip" });
        Blockbench.export({ type: t("export_title"), extensions: ["mcpack"], savetype: "zip", name: options.name.replace(/[^\p{L}\p{N}_. -]/gu, "_"), content }, () => Blockbench.showQuickMessage(t("exported", [result.reports.length])));
      } finally {
        this.state.busy = false;
        this.state.progress = "";
      }
    }
    propagate() {
      const data = Project?.bedrock_ragdoll;
      if (!data?.entity) return;
      for (const project of ModelProject.all) {
        if (project !== Project && project.bedrock_ragdoll?.entity === data.entity) {
          project.bedrock_ragdoll.config = clone(data.config);
          project.saved = false;
        }
      }
      const row = this.linkState(data) === "linked" && this.state.rows.find((r) => r.id === data.entity);
      if (row) {
        row.config = clone(data.config);
        this.validateRow(row);
      }
    }
    // Ragdoll mode always shows the default pose; the selected bone carries over from the other modes.
    enterMode() {
      this.preview.reset();
      const data = Project?.bedrock_ragdoll;
      if (!data?.entity) return;
      Animator.showDefaultPose();
      Project.model_3d?.updateMatrixWorld(true);
      this.syncGeometry();
      const group = Group.first_selected, body = group && Object.keys(data.config.bodies).find((id) => data.config.bodies[id].bone === group.name);
      if (group && this.project === Project) this.state.selected = body ? { type: "body", body, bone: group.name } : { type: "bone", bone: group.name };
    }
    leaveMode() {
      this.gizmo.cancel();
      this.preview.reset();
      this.gizmo.clear();
      this.overlay.clear();
    }
    modeChanged() {
      this.gizmo.cancel();
      this.preview.reset();
      if (Project?.bedrock_ragdoll?.entity && ["edit", "ragdoll"].includes(Modes.selected?.id)) {
        Animator.showDefaultPose();
        Project.model_3d?.updateMatrixWorld(true);
      }
      this.refresh();
    }
    dispose() {
      this.outputRequest++;
      clearTimeout(this.outputTimer);
      this.outputWorker?.terminate();
      this.outputWorker = null;
      this.gizmo.dispose();
      this.preview.reset();
      this.overlay.clear();
      this.browser?.delete();
    }
  };

  // src/blockbench/panels.js
  var numericId = 0;
  var NumberInput = {
    props: ["value", "min", "max", "step", "axis", "label"],
    data() {
      return { draft: null };
    },
    mounted() {
      const vm = this;
      this.slider = new NumSlider("ragdoll_value_" + ++numericId, {
        name: this.axis ? `${this.label} ${this.axis}` : this.label,
        private: true,
        color: this.axis?.toLowerCase(),
        settings: { min: this.min, max: this.max, default: Math.max(this.min ?? 0, 0) },
        getInterval(event = {}) {
          return (vm.step ?? 0.1) * (event.shiftKey ? 0.25 : 1) * (event.ctrlOrCmd ? 0.1 : 1);
        },
        get() {
          return vm.draft ?? vm.value ?? 0;
        },
        onBefore() {
          vm.start = vm.value ?? 0;
          vm.draft = vm.start;
        },
        change(modify) {
          const next = modify(vm.draft ?? vm.value ?? 0);
          if (!Number.isFinite(next)) return;
          vm.draft = Math.min(vm.max ?? Infinity, Math.max(vm.min ?? -Infinity, next));
          vm.$emit("preview", vm.draft);
        },
        onAfter() {
          const value = vm.draft;
          vm.draft = null;
          if (value !== null && value !== vm.start) vm.$emit("change", value);
          else vm.$emit("cancel");
          vm.$nextTick(() => vm.slider?.update());
        }
      });
      this.$el.append(this.slider.node);
      this.slider.update();
    },
    watch: { value() {
      this.slider?.update();
    } },
    beforeDestroy() {
      this.slider?.delete();
      this.slider = null;
    },
    template: `<div class="rg-number-input"></div>`
  };
  var Field = {
    components: { "rg-input": NumberInput },
    props: ["label", "value", "min", "max", "step", "tip"],
    template: `<div class="rg-field" :title="tip"><span>{{ label }}</span><rg-input :label="label" :value="value" :min="min" :max="max" :step="step" @preview="$emit('preview',$event)" @change="$emit('change',$event)" @cancel="$emit('cancel')"></rg-input></div>`
  };
  var Vector = {
    components: { "rg-input": NumberInput },
    props: ["label", "value", "min", "step", "reset", "resetTip", "note"],
    methods: { compose(i, n) {
      const v = [...this.value];
      v[i] = n;
      return v;
    } },
    template: `<div class="rg-vector"><div class="rg-vector-label"><span>{{ label }}</span><span v-if="note" class="rg-tag">{{ note }}</span><i v-if="reset" class="material-icons rg-reset" :title="resetTip" @click="$emit('reset')">replay</i></div>
    <div><rg-input v-for="(axis,i) in ['X','Y','Z']" :key="axis" :axis="axis" :label="label" :value="value[i]" :min="min" :step="step" @preview="$emit('preview',compose(i,$event))" @change="$emit('change',compose(i,$event))" @cancel="$emit('cancel')"></rg-input></div></div>`
  };
  var ENTITY = `<template v-if="p.type==='entity'">
  <h3 class="rg-heading"><i class="material-icons">accessibility_new</i><span class="rg-ellipsis">{{ s.entity }}</span></h3>
  <section><h4>{{ t('section_models') }}</h4>
    <button @click="run('chooseModels')">{{ t('select_models') }}</button>
    <label v-for="v in s.variants.slice(0,-1)" :key="'when'+v.index" class="rg-expression" :title="v.geometry"><span>{{ t('variant_when',[v.label]) }}</span>
      <input class="dark_bordered focusable_input" :value="v.when" @change="set('when.'+v.index,$event.target.value)"></label>
    <p v-if="s.variants.length>1" class="rg-note">{{ t('variant_default_note',[s.variants[s.variants.length-1].label]) }}</p>
  </section>
  <section><h4>{{ t('section_entity') }}</h4>
    <rg-field :label="t('scale')" :tip="t('scale_tip')" :value="s.variants[s.variant].scale" :min=".001" :max="100" :step=".0625" @change="set('scale',$event)"></rg-field>
  </section>
  <section><h4>{{ t('section_trigger') }}</h4>
    <template v-for="kind in ['trigger','release']">
      <label class="rg-field" :key="kind"><span>{{ t(kind) }}</span><select-input :value="preset(kind)" :options="options(kind)" @input="choose(kind,$event)"></select-input></label>
      <label v-if="preset(kind)==='custom'" :key="kind+'_custom'" class="rg-expression"><span>{{ t('custom_condition') }}</span><input class="dark_bordered focusable_input" :value="p[kind]" @change="set(kind,$event.target.value)"></label>
    </template>
  </section>
  <section><h4>{{ t('section_simulation') }}</h4>
    <rg-field :label="t('gravity')" :tip="t('gravity_tip')" :value="p.simulation.gravity" :min="0" :max="100" @change="set('gravity',$event)"></rg-field>
  </section>
  <section><h4>{{ t('section_performance') }}</h4><p class="rg-note">{{ t('performance_tip') }}</p>
    <rg-field :label="t('frequency')" :tip="t('frequency_tip')" :value="p.simulation.frequency" :min="5" :max="60" :step="1" @change="set('frequency',$event)"></rg-field>
    <rg-field :label="t('iterations')" :tip="t('iterations_tip')" :value="p.simulation.iterations" :min="1" :max="12" :step="1" @change="set('iterations',$event)"></rg-field>
    <rg-field :label="t('contact_limit')" :tip="t('contact_limit_tip')" :value="p.simulation.contactLimit" :min="8" :max="256" :step="1" @change="set('contactLimit',$event)"></rg-field>
  </section>
  <section class="rg-output"><h4>{{ t('output_size') }}</h4><p class="rg-note">{{ t('output_size_tip') }}</p>
    <div class="rg-output-value"><span>{{ t('output_'+(outputEntry?outputEntry.level:p.outputLevel)) }}</span><span>{{ outputEntry ? (outputEntry.bytes/1000000).toFixed(2)+' MB' : '—' }}</span></div>
    <input type="range" min="0" :max="Math.max(0,s.outputLevels.length-1)" step="1" :value="outputIndex" :disabled="s.outputPending||s.outputLevels.length<2" :aria-label="t('output_size')" @input="outputDraft=Number($event.target.value)" @change="changeOutput($event)">
  </section>
  <section><h4>{{ t('section_collision') }}</h4>
    <div class="rg-row"><span class="rg-grow">{{ t('collision_count',[p.pairs]) }}</span><button @click="run('autoCollision')" :title="t('auto_collision_tip')">{{ t('auto_collision') }}</button></div>
  </section>
  <section><h4>{{ t('section_pack') }}</h4>
    <p class="rg-note">{{ t('link_'+s.link,[s.packName]) }}</p>
    <button v-if="s.link!=='linked'" @click="run(s.link==='unloaded'?'choosePack':'linkEntity')">{{ s.link==='unloaded'?t('import_pack_button'):t('link_entity') }}</button>
  </section>
</template>`;
  var BONE = `<template v-else-if="p.type==='bone'">
  <h3 class="rg-heading"><i class="material-icons">folder</i><span class="rg-ellipsis">{{ p.bone }}</span></h3>
  <p class="rg-note">{{ p.owner ? t('bone_follows',[p.owner]) : t('bone_free') }}</p>
  <button @click="run('addBody',p.bone)">{{ t('add_body') }}</button>
</template>`;
  var BODY = `<template v-else-if="p.type==='body'">
  <h3 class="rg-heading"><i class="fa fa-cube"></i><span class="rg-ellipsis">{{ p.id }}</span><span class="rg-muted rg-ellipsis">{{ p.bone }}</span></h3>
  <section><h4>{{ t('section_mass') }}</h4>
    <label class="rg-field"><span>{{ t('mass_mode') }}</span><select-input :value="p.massMode" :options="{density:t('mass_density'),mass:t('mass_fixed')}" @input="set('massMode',$event)"></select-input></label>
    <rg-field v-if="p.massMode==='density'" :label="t('density')" :value="p.density" :min=".000001" :step="10" @preview="draft('density',$event)" @cancel="restore" @change="set('density',$event)"></rg-field>
    <rg-field v-else :label="t('mass')" :value="p.mass" :min=".000001" :step="1" @preview="draft('mass',$event)" @cancel="restore" @change="set('mass',$event)"></rg-field>
    <div v-if="p.massMode==='density'" class="rg-field"><span>{{ t('mass') }}</span><span class="rg-value">{{ format(p.mass) }}</span></div>
    <rg-vector :label="t('center')" :value="p.center" :note="p.explicitCenter?'':t('auto')" :reset="p.explicitCenter" :reset-tip="t('reset_auto')" @preview="draft('center',$event)" @cancel="restore" @change="set('center',$event)" @reset="run('resetCenter',p.id)"></rg-vector>
    <p v-if="s.variants.length>1" class="rg-note">{{ t('per_model_note') }}</p>
  </section>
  <section><h4>{{ t('section_material') }}</h4>
    <rg-field :label="t('friction')" :value="p.friction" :min="0" :step=".05" @change="set('friction',$event)"></rg-field>
    <rg-field :label="t('restitution')" :value="p.restitution" :min="0" :max="1" :step=".05" @change="set('restitution',$event)"></rg-field>
    <details><summary>{{ t('section_damping') }}</summary>
      <rg-field :label="t('linear_damping')" :value="p.linearDamping" :min="0" :max=".999999" :step=".01" @change="set('linearDamping',$event)"></rg-field>
      <rg-field :label="t('angular_damping')" :value="p.angularDamping" :min="0" :max=".999999" :step=".01" @change="set('angularDamping',$event)"></rg-field>
    </details>
  </section>
  <section><h4>{{ t('section_self_collision') }}</h4><p class="rg-note">{{ t('self_collision_tip') }}</p>
    <label v-for="c in p.collisions" :key="c.id" class="rg-check-row"><input type="checkbox" :checked="c.enabled" @change="set('collision.'+c.id,$event.target.checked)"><span>{{ c.id }}</span></label>
  </section>
  <div class="rg-buttons"><button @click="run('addShape',p.id)">{{ t('add_shape') }}</button><button @click="run('refit',p.id)" :title="t('refit_tip')">{{ t('refit') }}</button><button @click="run('addJoint',p.id)">{{ t('add_joint') }}</button><button @click="run('removeBody',p.id)">{{ t('remove_body') }}</button></div>
</template>`;
  var SHAPE = `<template v-else-if="p.type==='shape'">
  <h3 class="rg-heading"><i class="material-icons">crop_square</i><span>{{ t('shape_n',[p.index+1]) }}</span><span class="rg-muted rg-ellipsis">{{ p.body }}</span></h3>
  <rg-vector :label="t('position')" :value="p.position" :step=".5" @preview="draft('shape.position',$event)" @cancel="restore" @change="set('shape.position',$event)"></rg-vector>
  <rg-vector :label="t('size')" :value="p.size" :min=".01" :step=".5" @preview="draft('shape.size',$event)" @cancel="restore" @change="set('shape.size',$event)"></rg-vector>
  <rg-vector :label="t('rotation')" :value="p.rotation" :step="1" @preview="draft('shape.rotation',$event)" @cancel="restore" @change="set('shape.rotation',$event)"></rg-vector>
  <div class="rg-buttons"><button @click="run('refit',p.body)" :title="t('refit_tip')">{{ t('refit') }}</button><button @click="run('removeShape',p.body,p.index)" :disabled="p.count===1">{{ t('remove_shape') }}</button></div>
</template>`;
  var JOINT = `<template v-else-if="p.type==='joint'">
  <h3 class="rg-heading"><i class="material-icons">adjust</i><span class="rg-ellipsis">{{ p.id }}</span></h3>
  <div v-if="p.mismatch" class="rg-warning"><p>{{ t('mismatch') }}</p><button @click="run('alignJoint',p.id)">{{ t('align_joint') }}</button></div>
  <section><h4>{{ t('section_connection') }}</h4>
    <label class="rg-field" :title="t('joint_body_tip')"><span>{{ t('joint_a') }}</span><select-input :value="p.a" :options="others(p.b)" @input="set('joint.a',$event)"></select-input></label>
    <label class="rg-field" :title="t('joint_body_tip')"><span>{{ t('joint_b') }}</span><select-input :value="p.b" :options="others(p.a)" @input="set('joint.b',$event)"></select-input></label>
  </section>
  <section><h4>{{ t('section_frame') }}</h4>
    <rg-vector :label="t('position')" :value="p.position" :step=".5" :note="p.customPosition?'':t('auto')" :reset="p.customPosition" :reset-tip="t('reset_position')" @preview="draft('joint.position',$event)" @cancel="restore" @change="set('joint.position',$event)" @reset="run('resetJointPosition',p.id)"></rg-vector>
    <rg-vector :label="t('orientation')" :value="p.rotation" :step="1" :reset="p.customRotation" :reset-tip="t('reset_rotation')" @preview="draft('joint.rotation',$event)" @cancel="restore" @change="set('joint.rotation',$event)" @reset="run('resetJointRotation',p.id)"></rg-vector>
  </section>
  <section><h4>{{ t('section_limits') }}</h4>
    <rg-field :label="t('swing')" :tip="t('swing_tip')" :value="p.swing" :min="0" :max="180" :step="1" @preview="draft('swing',$event)" @cancel="restore" @change="set('swing',$event)"></rg-field>
    <rg-field :label="t('twist')" :tip="t('twist_tip')" :value="p.twist" :min="0" :max="180" :step="1" @preview="draft('twist',$event)" @cancel="restore" @change="set('twist',$event)"></rg-field>
  </section>
  <div class="rg-buttons"><button @click="run('removeJoint',p.id)">{{ t('remove_joint') }}</button></div>
</template>`;
  function createPanels(controller2) {
    const run = (name, ...args) => controller2.safe(() => controller2[name](...args));
    const structure = new Panel("ragdoll_structure", {
      name: t("panel_structure"),
      icon: "accessibility_new",
      resizable: true,
      growable: true,
      condition: { modes: ["ragdoll"] },
      default_position: { slot: "right_bar", float_position: [0, 0], float_size: [300, 400], height: 400 },
      menu: new Menu([
        { id: "ragdoll_browse", name: t("menu_browser"), icon: "inventory_2", click: () => browserDialog(controller2) },
        "_",
        { id: "ragdoll_import_config", name: t("import_config"), icon: "file_upload", condition: () => controller2.state.configured, click: () => run("importConfig") },
        { id: "ragdoll_export_config", name: t("export_config"), icon: "file_download", condition: () => controller2.state.configured, click: () => run("exportConfig") },
        { id: "ragdoll_auto_collision", name: t("auto_collision"), icon: "auto_fix_high", condition: () => controller2.state.configured, click: () => run("autoCollision") },
        { id: "ragdoll_link", name: t("link_entity"), icon: "link", condition: () => controller2.state.configured && controller2.state.link !== "linked", click: () => run("linkEntity") }
      ]),
      component: {
        data: () => ({ s: controller2.state }),
        computed: { variants() {
          return Object.fromEntries(this.s.variants.map((v) => [String(v.index), v.label]));
        } },
        methods: { t, run, browse() {
          browserDialog(controller2);
        }, select(row) {
          controller2.select(row);
        }, fold(row) {
          controller2.fold(row);
        }, toggle(row) {
          controller2.toggleBody(row);
        }, menu(row, event) {
          controller2.rowMenu(row, event);
        } },
        template: `<div class="rg-structure">
        <div v-if="!s.configured" class="rg-empty-state">
          <p>{{ s.canCreate ? t('empty_state_model') : t('empty_state_project') }}</p>
          <button v-if="s.canCreate" @click="run('createFromModel')">{{ t('create_ragdoll') }}</button>
          <button @click="browse">{{ t('menu_browser') }}</button>
        </div>
        <template v-else>
          <div class="rg-bar">
            <div class="tool" :class="{disabled:s.busy}" :title="t(s.running?'pause_preview':'play_preview')" @click="run('play')"><i class="material-icons">{{ s.running?'pause':'play_arrow' }}</i></div>
            <div class="tool" :class="{disabled:!s.previewing}" :title="t('reset_preview')" @click="s.previewing&&run('resetPreview')"><i class="material-icons">replay</i></div>
            <div class="rg-grow"></div>
            <select-input v-if="s.variants.length>1" class="rg-variant" :title="t('variant_tip')" :value="String(s.variant)" :options="variants" @input="run('switchVariant',$event)"></select-input>
          </div>
          <ul class="rg-tree" role="tree">
            <li v-for="row in s.tree" :key="row.key" role="treeitem" :aria-selected="row.selected" class="rg-row" :class="['rg-'+row.type,{selected:row.selected,'rg-dim':row.type==='bone'}]" :style="{'--depth':row.depth}" @click="select(row)" @contextmenu.prevent.stop="menu(row,$event)">
              <i class="fa fa-angle-right rg-fold" :class="{open:!row.folded,hidden:!row.foldable}" @click.stop="fold(row)"></i>
              <dynamic-icon :icon="row.icon"></dynamic-icon>
              <span class="rg-label">{{ row.label }}</span><span v-if="row.detail" class="rg-detail">{{ row.detail }}</span>
              <i v-if="row.type==='bone'||row.type==='body'" class="material-icons rg-toggle" :title="row.hasBody?t('remove_body'):t('add_body')" @click.stop="toggle(row)">{{ row.hasBody?'check_box':'check_box_outline_blank' }}</i>
            </li>
          </ul>
          <div v-if="s.error" class="rg-error">{{ s.error }}</div>
        </template>
      </div>`
      }
    });
    structure.snap_menu = new Menu([...structure.menu.structure, "_", ...structure.snap_menu.structure]);
    const properties = new Panel("ragdoll_properties", {
      name: t("panel_properties"),
      icon: "tune",
      resizable: true,
      growable: true,
      insert_after: "ragdoll_structure",
      condition: { modes: ["ragdoll"], method: () => controller2.state.configured },
      default_position: { slot: "right_bar", float_position: [0, 0], float_size: [300, 400], height: 400 },
      component: {
        components: { "rg-field": Field, "rg-vector": Vector },
        data: () => ({ s: controller2.state, outputDraft: null }),
        computed: {
          p() {
            return this.s.props;
          },
          key() {
            return JSON.stringify(this.s.selected) + ":" + this.s.variant;
          },
          outputIndex() {
            return this.outputDraft ?? Math.max(0, this.s.outputLevels.findIndex((entry) => entry.levels.includes(this.p?.outputLevel)));
          },
          outputEntry() {
            return this.s.outputLevels[this.outputIndex];
          }
        },
        methods: {
          t,
          run,
          set(key2, value) {
            controller2.change(key2, value);
          },
          changeOutput(event) {
            const entry = this.s.outputLevels[Number(event.target.value)];
            this.outputDraft = null;
            if (entry) this.set("outputLevel", entry.level);
          },
          draft(key2, value) {
            controller2.draftChange(key2, value);
          },
          restore() {
            controller2.refresh();
          },
          preset(kind) {
            return this.s.custom[kind] ? "custom" : presetOf(kind === "trigger" ? TRIGGERS : RELEASES, this.p[kind]);
          },
          options(kind) {
            return kind === "trigger" ? { hurt: t("trigger_hurt"), custom: t("custom") } : { healed: t("release_healed"), custom: t("custom") };
          },
          choose(kind, value) {
            this.s.custom[kind] = value === "custom";
            if (value !== "custom") this.set(kind, (kind === "trigger" ? TRIGGERS : RELEASES)[value]);
          },
          others(id) {
            return Object.fromEntries(this.p.bodies.filter((b) => b !== id).map((b) => [b, b]));
          },
          format(n) {
            return Number(n.toPrecision(5)).toString();
          }
        },
        template: `<div class="rg-properties">
        <div v-if="s.error" class="rg-error"><p>{{ s.error }}</p><button v-if="s.missing.length" @click="run('dropMissing')">{{ t('drop_missing',[s.missing.join(', ')]) }}</button></div>
        <p v-if="s.previewing" class="rg-note rg-locked-note">{{ t('preview_locked') }}</p>
        <div v-if="p" :key="key" :class="{'rg-locked':s.previewing||s.busy}">${ENTITY}${BONE}${BODY}${SHAPE}${JOINT}</div>
      </div>`
      }
    });
    return [structure, properties];
  }
  var styles = `
  #panel_ragdoll_structure,#panel_ragdoll_properties {overflow-y:auto; overflow-x:hidden; min-height:0;}
  #panel_ragdoll_structure > .panel_vue_wrapper,#panel_ragdoll_properties > .panel_vue_wrapper {flex:0 0 auto; overflow:visible;}
  .rg-structure {padding:0 0 6px;}
  .rg-bar {display:flex; align-items:center; gap:2px; padding:2px 6px; border-bottom:1px solid var(--color-border);}
  .rg-bar .tool {width:28px; height:28px; display:flex; align-items:center; justify-content:center; cursor:pointer; border-radius:3px;}
  .rg-bar .tool:hover {background:var(--color-button);}
  .rg-bar .tool.disabled {opacity:.4; pointer-events:none;}
  .rg-bar .rg-variant {min-width:90px; max-width:55%; height:24px; line-height:24px;}
  .rg-tree {list-style:none; margin:0; padding:2px 0;}
  .rg-row {display:flex; align-items:center; gap:4px; height:28px; padding:0 6px 0 calc(var(--depth) * 16px + 4px); cursor:pointer; white-space:nowrap; color:var(--color-text);}
  .rg-row:hover {background:var(--color-button);}
  .rg-row.selected {background:var(--color-selected);}
  .rg-row.rg-dim > .icon, .rg-row.rg-dim > i:not(.rg-toggle):not(.rg-fold), .rg-row.rg-dim > .rg-label {opacity:.55;}
  .rg-row .rg-fold {width:12px; text-align:center; transition:transform .1s;}
  .rg-row .rg-fold.open {transform:rotate(90deg);}
  .rg-row .rg-fold.hidden {visibility:hidden;}
  .rg-row .rg-label {flex:0 1 auto; min-width:0; overflow:hidden; text-overflow:ellipsis;}
  .rg-row .rg-detail {flex:1 1 auto; min-width:0; overflow:hidden; text-overflow:ellipsis; color:var(--color-subtle_text); font-size:.9em;}
  .rg-row .rg-toggle {margin-left:auto; opacity:.7; font-size:18px;}
  .rg-row .rg-toggle:hover {opacity:1; color:var(--color-light);}
  .rg-shape > i:not(.rg-fold), .rg-joint > i:not(.rg-fold) {font-size:16px;}
  .rg-empty-state {padding:12px; display:flex; flex-direction:column; gap:8px; color:var(--color-subtle_text); white-space:normal;}
  .rg-properties {padding:4px 10px 10px;}
  .rg-properties section {margin:10px 0; padding-top:6px; border-top:1px solid var(--color-border);}
  .rg-properties h4 {margin:0 0 4px; font-size:1em; color:var(--color-subtle_text); font-weight:normal;}
  .rg-heading {display:flex; align-items:center; gap:6px; margin:4px 0 8px; font-size:1.1em; font-weight:normal;}
  .rg-heading .rg-muted {margin-left:auto; font-size:.85em;}
  .rg-field {display:grid; grid-template-columns:minmax(70px,42%) minmax(0,1fr); align-items:center; gap:8px; margin:5px 0; min-height:24px;}
  .rg-field > .bb-select {min-width:0; width:100%; height:24px; line-height:24px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;}
  .rg-value {text-align:center; color:var(--color-subtle_text);}
  .rg-output-value {display:flex; justify-content:space-between; gap:8px; margin:6px 0; font-variant-numeric:tabular-nums;}
  .rg-output input[type=range] {width:100%; margin:2px 0; accent-color:var(--color-accent);}
  .rg-vector {margin:8px 0;}
  .rg-vector-label {display:flex; align-items:center; gap:6px; margin-bottom:2px; color:var(--color-subtle_text);}
  .rg-vector > div:last-child {display:flex; gap:4px;}
  .rg-tag {font-size:.85em; padding:0 5px; border-radius:3px; background:var(--color-back);}
  .rg-reset {margin-left:auto; font-size:16px; cursor:pointer;}
  .rg-reset:hover {color:var(--color-light);}
  .rg-number-input {display:flex; flex:1; min-width:0;}
  .rg-number-input .nslide_tool {width:100%; min-width:0; margin:0; height:24px;}
  .rg-number-input .nslide {width:100%; min-width:0; height:24px; line-height:24px; text-align:center;}
  .rg-expression {display:block; margin:6px 0;}
  .rg-expression input {display:block; width:100%; margin-top:3px;}
  .rg-note {margin:4px 0; color:var(--color-subtle_text); white-space:normal; font-size:.92em;}
  .rg-warning {margin:6px 0; padding:6px 8px; border-left:3px solid #ff9b3d; background:var(--color-back); white-space:normal;}
  .rg-warning p {margin:0 0 6px;}
  .rg-error {margin:6px 8px; color:var(--color-error); white-space:normal;}
  .rg-buttons, .rg-row-buttons {display:flex; flex-wrap:wrap; gap:4px; margin-top:10px;}
  .rg-properties .rg-row {padding:0; cursor:default; height:auto;}
  .rg-properties .rg-row:hover {background:none;}
  .rg-check-row {display:flex; align-items:center; gap:6px; margin:3px 0; cursor:pointer;}
  .rg-locked {pointer-events:none; opacity:.55;}
  .rg-properties details summary {cursor:pointer; color:var(--color-subtle_text); margin:6px 0 2px;}
  .rg-grow {flex:1; min-width:0;}
  .rg-ellipsis {overflow:hidden; text-overflow:ellipsis; white-space:nowrap;}
  .rg-muted {color:var(--color-subtle_text);}
  .rg-browser, .rg-export {display:flex; flex-direction:column; gap:6px;}
  .rg-browser-bar, .rg-export-bar {display:flex; align-items:center; gap:6px;}
  .rg-export-bar a {color:var(--color-accent);}
  .rg-entity-list {list-style:none; margin:0; padding:0; max-height:48vh; min-height:120px; overflow:auto; border:1px solid var(--color-border); background:var(--color-back);}
  .rg-entity-list li {display:flex; align-items:center; gap:8px; padding:4px 8px; cursor:default;}
  .rg-entity-list li:hover {background:var(--color-button);}
  .rg-entity-list li.selected {background:var(--color-selected);}
  .rg-entity-list li.rg-unavailable {opacity:.55;}
  .rg-entity-list li.rg-empty {justify-content:center; color:var(--color-subtle_text); padding:24px 8px;}
  .rg-export-list {max-height:32vh;}
  .rg-status {font-size:.9em; color:var(--color-subtle_text); white-space:nowrap;}
  .rg-status-invalid, .rg-status-unconfigured {color:var(--color-error);}
`;

  // src/blockbench/interface.js
  function registerInterface(controller2) {
    const items = [], handles = [];
    const mode = new Mode("ragdoll", {
      name: t("mode"),
      icon: "accessibility_new",
      default_tool: "ragdoll_move_tool",
      selectElements: false,
      condition: () => Format?.id === "bedrock",
      onSelect: () => controller2.enterMode(),
      onUnselect: () => controller2.leaveMode()
    });
    Modes.vue?.$forceUpdate();
    const tool = (id, icon, key2, name, value) => {
      const item = new Tool(id, {
        name: t(name),
        description: t(name + "_tip"),
        icon,
        category: "tools",
        modes: ["ragdoll"],
        selectElements: false,
        transformerMode: "hidden",
        keybind: new Keybind({ key: key2 }),
        onSelect() {
          controller2.state.tool = value;
          controller2.draw();
        }
      });
      items.push(item);
      return item;
    };
    [tool("ragdoll_move_tool", "icon-gizmo", "v", "tool_move", "move"), tool("ragdoll_resize_tool", "open_with", "s", "tool_resize", "resize"), tool("ragdoll_rotate_tool", "sync", "r", "tool_rotate", "rotate")].forEach((item, i) => Toolbars.tools.add(item, i));
    const action = (id, options, menu) => {
      const item = new Action(id, { category: "file", ...options });
      items.push(item);
      if (menu) MenuBar.addAction(item, menu);
      return item;
    };
    action("ragdoll_import_pack", { name: t("menu_import"), icon: "accessibility_new", click: () => controller2.choosePack(() => browserDialog(controller2)) }, "file.import");
    action("ragdoll_export_pack", { name: t("menu_export"), icon: "accessibility_new", click: () => exportDialog(controller2) }, "file.export");
    action("ragdoll_browser", { name: t("menu_browser"), icon: "inventory_2", category: "tools", click: () => browserDialog(controller2) }, "tools");
    action("ragdoll_preview", {
      name: t("play_preview"),
      icon: "play_arrow",
      category: "animation",
      keybind: new Keybind({ key: 32 }),
      condition: { modes: ["ragdoll"], method: () => controller2.state.configured },
      click: () => controller2.safe(() => controller2.play())
    });
    const animation = action("ragdoll_preview_animation", {
      name: t("preview_animation"),
      description: t("preview_animation_tip"),
      icon: "accessibility_new",
      category: "animation",
      condition: { modes: ["animate"], method: () => controller2.state.configured },
      click: () => controller2.safe(() => controller2.play())
    });
    const reset = action("ragdoll_reset_animation", {
      name: t("reset_preview"),
      icon: "replay",
      category: "animation",
      condition: { modes: ["animate"], method: () => controller2.state.configured },
      click: () => controller2.resetPreview()
    });
    const at = Toolbars.timeline.children.findIndex((item) => item?.id === "jump_to_timeline_end");
    Toolbars.timeline.add(animation, at < 0 ? void 0 : at + 1);
    Toolbars.timeline.add(reset, at < 0 ? void 0 : at + 2);
    handles.push(SharedActions.add("delete", { subject: "ragdoll", priority: 1, condition: () => controller2.canDelete(), run: () => controller2.deleteSelected() }));
    const panels = createPanels(controller2), css = Blockbench.addCSS(styles);
    return function dispose() {
      if (Modes.selected?.id === "ragdoll") Modes.options.edit.select();
      for (const handle of handles) handle.delete();
      for (const item of items) item.delete();
      for (const panel of panels) {
        panel.vue?.$destroy();
        panel.delete();
      }
      css.delete();
      mode.delete();
      const index = Keybinds.actions.indexOf(mode);
      if (index >= 0) Keybinds.actions.splice(index, 1);
      Modes.vue?.$forceUpdate();
      updateInterfacePanels();
    };
  }

  // src/index.js
  var controller;
  var property;
  var disposeInterface;
  var listeners = [];
  var on = (event, listener, target = Blockbench) => {
    target.on(event, listener);
    listeners.push([target, event, listener]);
  };
  registerTranslations();
  Plugin.register("simple_ragdoll", {
    title: t("title"),
    author: "MCSCPCB",
    description: t("description"),
    icon: "accessibility_new",
    version: "0.1.0",
    min_version: "5.2.0",
    variant: "both",
    tags: ["Minecraft: Bedrock Edition", "Animation"],
    onload() {
      property = new Property(ModelProject, "object", "bedrock_ragdoll", {
        default: {},
        exposed: false,
        merge(project, data) {
          if (data.bedrock_ragdoll?.entity) project.bedrock_ragdoll = clone(data.bedrock_ragdoll);
        }
      });
      controller = new Controller();
      disposeInterface = registerInterface(controller);
      on("select_project", () => controller.refresh());
      on("select_no_project", () => controller.refresh());
      on("unselect_project", () => {
        controller.gizmo.cancel();
        controller.gizmo.clear();
        controller.overlay.clear();
        controller.preview.reset();
      });
      on("select_mode", () => controller.modeChanged());
      on("save_editor_state", () => controller.safe(() => controller.syncGeometry()));
      on("load_project", () => controller.snapshots.delete(Project));
      on("parsed", () => {
        controller.safe(() => controller.syncGeometry());
        controller.refresh();
      }, Codecs.project);
      on("finished_edit", () => {
        controller.safe(() => controller.syncGeometry());
        controller.refresh();
      });
      on("create_undo_save", ({ save, aspects }) => {
        if (aspects.ragdoll) save.ragdoll = clone(Project.bedrock_ragdoll ?? {});
      });
      on("load_undo_save", ({ save }) => {
        if (save.ragdoll) {
          controller.preview.reset();
          Project.bedrock_ragdoll = clone(save.ragdoll);
          controller.propagate();
          controller.refresh();
        }
      });
      on("undo", () => controller.refresh());
      on("redo", () => controller.refresh());
      on("save_project", ({ model }) => {
        if (!Project.bedrock_ragdoll?.entity) return;
        controller.safe(() => controller.syncGeometry());
        model.bedrock_ragdoll = clone(Project.bedrock_ragdoll);
      });
      controller.refresh();
    },
    onunload() {
      for (const [target, event, listener] of listeners.splice(0)) target.removeListener(event, listener);
      disposeInterface?.();
      controller?.dispose();
      property?.delete();
    }
  });
})();
/* Three.js TransformControls
The MIT License

Copyright © 2010-2021 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
