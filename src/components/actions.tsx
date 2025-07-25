import Link from "next/link";
import { FiEdit2, FiEye, FiSettings, FiTrash2 } from "react-icons/fi";
import ConfirmDialog from "./confirm-dialog";
import Tooltip from "./tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // ShadCN UI compatible

type ActionType = "view" | "edit" | "delete" | "settings";

interface TableActionsProps {
  id: string;
  baseRoute: string;
  actions?: ActionType[];
  module?: string;
  onDelete?: (id: string) => void;
  deleteLoading?: boolean;

  // Optional dialog-based edit support
  editDialog?: {
    title: string;
    description?: string;
    content: React.ReactNode;
  };
}

const TableActions: React.FC<TableActionsProps> = ({
  id,
  baseRoute,
  actions = ["view", "edit", "delete", "settings"],
  module = "Item",
  onDelete,
  deleteLoading = false,
  editDialog,
}) => {
  return (
    <div className="flex gap-4 items-center">
      {actions.includes("view") && (
        <Tooltip content={`View ${module}`}>
          <Link href={`${baseRoute}/${id}`}>
            <FiEye size={18} className="cursor-pointer text-blue-500" />
          </Link>
        </Tooltip>
      )}

      {actions.includes("settings") && (
        <Tooltip content={`Settings ${module}`}>
          <Link href={`${baseRoute}/${id}/settings`}>
            <FiSettings size={18} className="cursor-pointer text-blue-500" />
          </Link>
        </Tooltip>
      )}

      {actions.includes("edit") && (
        <>
          {editDialog?.title ? (
            <Dialog>
              <DialogTrigger>
                <Tooltip content={`Edit ${module}`}>
                  <FiEdit2 size={18} className="cursor-pointer text-blue-500" />
                </Tooltip>
              </DialogTrigger>
              <DialogContent className="max-h-[500px] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>{editDialog.title}</DialogTitle>
                  {editDialog.description && (
                    <DialogDescription>
                      {editDialog.description}
                    </DialogDescription>
                  )}
                </DialogHeader>
                {editDialog.content}
              </DialogContent>
            </Dialog>
          ) : (
            <Tooltip content={`Edit ${module}`}>
              <Link href={`${baseRoute}/${id}/edit`}>
                <FiEdit2 size={18} className="cursor-pointer text-blue-500" />
              </Link>
            </Tooltip>
          )}
        </>
      )}

      {actions.includes("delete") && onDelete && (
        <ConfirmDialog
          title={`Delete ${module}`}
          description={`Are you sure you want to delete this ${module.toLowerCase()}?`}
          confirmText="Delete"
          cancelText="Cancel"
          onConfirm={() => onDelete(id)}
          loading={deleteLoading}
          variant="destructive"
        >
          <Tooltip content={`Delete ${module}`}>
            <FiTrash2 size={18} className="cursor-pointer text-red-500" />
          </Tooltip>
        </ConfirmDialog>
      )}
    </div>
  );
};

export default TableActions;
