"""
Minions Bundle: Execution SDK — Type Schemas
Custom MinionType schemas for Minions Bundle: Execution.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

class Task(MinionType):
    """Granular unit of work"""
    slug = "task"
    icon = "✅"

    fields = [
        FieldDefinition(name="title", type="str", label="title"),
        FieldDefinition(name="projectId", type="str", label="projectId"),
        FieldDefinition(name="priority", type="float", label="priority"),
        FieldDefinition(name="targetDate", type="str", label="targetDate"),
        FieldDefinition(name="status", type="str", label="status"),
        FieldDefinition(name="isTop3Today", type="bool", label="isTop3Today"),
    ]


class DailySprint(MinionType):
    """A focused daily work session"""
    slug = "dailySprint"
    icon = "🏃"

    fields = [
        FieldDefinition(name="date", type="str", label="date"),
        FieldDefinition(name="notes", type="str", label="notes"),
    ]


BUNDLE_TYPES = [Task, DailySprint]
